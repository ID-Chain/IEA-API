/**
 * IDChain Agent REST API
 * ConnectionOffer and Connection Controller
 */

const indy = require('indy-sdk');

const wrap = require('../asyncwrap').wrap;
const lib = require('../lib');
const log = require('../log').log;
const pool = require('../pool');
const APIResult = require('../api-result');
const Message = require('../models/message');

const ENDPOINT = process.env.APP_ENDPOINT;

module.exports = {
    listOffers: wrap(async (req, res, next) => {
        const data = await Message.find({
            wallet: req.wallet.id,
            type: lib.message.messageTypes.CONNECTIONOFFER
        }).exec();
        next(APIResult.success(data));
    }),

    createOffer: wrap(async (req, res, next) => {
        const wallet = req.wallet;
        const endpoint = req.body.endpoint || ENDPOINT;
        // TODO role const role = req.body.role || 'NONE';
        const connOffer = await lib.connection.createConnectionOffer(wallet, endpoint);
        await Message.store(req.wallet.id, connOffer.id, connOffer.type, wallet.ownDid, null, connOffer);
        // TODO return the whole message object or only the connectionOffer part?
        next(APIResult.created(connOffer));
    }),

    retrieveOffer: wrap(async (req, res, next) => {
        const offerId = req.params.connectionOfferId;
        const data = await Message.find({
            _id: offerId,
            type: lib.message.messageTypes.CONNECTIONOFFER,
            wallet: req.wallet.id
        }).exec();
        if (!data) {
            next(APIResult.notFound());
        } else {
            next(APIResult.success(data));
        }
    }),

    deleteOffer: wrap(async (req, res, next) => {
        const offerId = req.params.connectionOfferId;
        const data = await Message.find({
            _id: offerId,
            type: lib.message.messageTypes.CONNECTIONOFFER,
            wallet: req.wallet.id
        }).exec();
        if (!data) {
            next(APIResult.notFound());
        } else {
            await data.remove();
            next(APIResult.noContent());
        }
    }),

    listRequests: wrap(async (req, res, next) => {
        const data = await Message.find({
            type: lib.message.messageTypes.CONNECTIONREQUEST,
            wallet: req.wallet.id
        }).exec();
        next(APIResult.success(data));
    }),

    // also sends the request
    createRequest: wrap(async (req, res, next) => {
        const wallet = req.wallet;
        let connOffer = req.body.connectionOffer;
        const myEndpoint = req.body.Endpoint || ENDPOINT;
        let theirEndpointDid = req.body.theirDid;
        let theirEndpointVk = req.body.theirVk;
        let theirEndpoint = req.body.theirEndpoint;
        let nonce = null;
        let meta = {};

        // if connOffer is referenced by messageId, retrieve it
        if (connOffer && typeof connOffer === 'string') {
            connOffer = await Message.findOne({
                messageId: connOffer,
                wallet: wallet.id,
                recipientDid: wallet.ownDid,
                type: lib.message.messageTypes.CONNECTIONOFFER
            }).exec();
        }
        if (connOffer) {
            theirEndpointDid = connOffer.message.did;
            theirEndpointVk = connOffer.message.verkey || theirEndpointVk;
            theirEndpoint = connOffer.message.endpoint || theirEndpoint;
            nonce = connOffer.message.nonce;
        }
        // without the endpointDid, we cannot communicate
        if (!theirEndpointDid) {
            return next(APIResult.badRequest('either connectionOffer or recipientDid are required'));
        }
        // if the verkey is neither in the offer nor in the body
        if (!theirEndpointVk) {
            // it must be on the ledger!
            theirEndpointVk = await indy.keyForDid(pool.handle, wallet.handle, theirEndpointDid);
        }
        // if their endpoint is neither in the offer not in the body
        if (!theirEndpoint) {
            // it must be on the ledger!
            [theirEndpoint] = await indy.getEndpointForDid(wallet.handle, pool.handle, theirEndpointDid);
        }

        // set their information in the wallet
        // this somehow prevents following operations on the wallet
        // if it fails, i.e. we're trying to store a did twice, which
        // may happen since endpoint Dids do not change that often
        // see related jira: https://jira.hyperledger.org/browse/IS-802
        try {
            await indy.storeTheirDid(wallet.handle, {
                did: theirEndpointDid,
                verkey: theirEndpointVk
            });
            await indy.setEndpointForDid(wallet.handle, theirEndpointDid, theirEndpoint, theirEndpointVk);
        } catch (err) {
            if (err.message !== '213') {
                throw err;
            }
        }

        // and also in the database
        meta = {
            theirEndpointDid: theirEndpointDid,
            theirEndpointVk: theirEndpointVk,
            theirEndpoint: theirEndpoint
        };

        const connRequest = await lib.connection.createConnectionRequest(req.wallet, myEndpoint, nonce);
        const msg = await Message.store(
            wallet.id,
            connRequest.message.nonce,
            connRequest.type,
            wallet.ownDid,
            theirEndpointDid,
            connRequest,
            meta
        );
        await lib.message.sendAnoncryptMessage(pool.handle, wallet.handle, theirEndpointDid, connRequest);
        next(APIResult.success(msg));
    }),

    retrieveRequest: wrap(async (req, res, next) => {
        const requestId = req.params.connectionRequestId;
        const data = await Message.findConnectionRequestById(requestId, req.wallet).exec();
        if (!data) {
            next(APIResult.notFound());
        } else {
            next(APIResult.success(data));
        }
    }),

    deleteRequest: wrap(async (req, res, next) => {
        const requestId = req.params.connectionRequestId;
        const data = await Message.findConnectionRequestById(requestId, req.wallet).exec();
        if (!data) {
            next(APIResult.notFound());
        } else {
            await data.remove();
            next(APIResult.noContent());
        }
    }),

    listResponses: wrap(async (req, res, next) => {
        const data = await Message.find({
            type: lib.message.messageTypes.CONNECTIONRESPONSE,
            wallet: req.wallet.id
        }).exec();
        next(APIResult.success(data));
    }),

    // aka accept request manually
    createResponse: wrap(async (req, res, next) => {
        const wallet = req.wallet;
        let connRequest = req.body.connectionRequest;

        // if connRequest is referenced by messageId, retrieve it
        if (connRequest && typeof connRequest === 'string') {
            connRequest = await Message.findOne({
                messageId: connRequest,
                wallet: wallet.id,
                recipientDid: wallet.ownDid,
                type: lib.message.messageTypes.CONNECTIONREQUEST
            }).exec();
        }
        if (!connRequest) {
            return next(APIResult.badRequest('no corresponding connection request found'));
        }
        const connRes = await module.exports.acceptRequest(wallet, connRequest.message);
        next(APIResult.created(connRes));
    }),

    retrieveResponse: wrap(async (req, res, next) => {
        const responseId = req.params.connectionResponseId;
        const data = await Message.findConnectionResponseById(responseId, req.wallet).exec();
        if (!data) {
            next(APIResult.notFound());
        } else {
            next(APIResult.success(data));
        }
    }),

    async receiveOffer(wallet, message) {
        await Message.store(wallet.id, message.id, message.type, message.message.did, wallet.ownDid, message.message);
        return APIResult.accepted();
    },

    async receiveRequest(wallet, message) {
        log.debug('received request');
        const connOffer = await Message.findOne({
            messageId: message.id,
            type: lib.message.messageTypes.CONNECTIONOFFER,
            wallet: wallet.id,
            senderDid: wallet.ownDid
        }).exec();

        // previous offer exists
        if (connOffer) {
            await module.exports.acceptRequest(wallet, message.message, connOffer);
            return APIResult.accepted();
        }

        // no previous offer, so just store the request
        await Message.store(
            wallet.id,
            message.message.nonce,
            message.type,
            message.message.did,
            wallet.ownDid,
            message.message
        );
        return APIResult.accepted();
    },

    async receiveResponse(wallet, message) {
        log.debug('received response');
        const connReq = await Message.findOne({
            messageId: message.id,
            type: lib.message.messageTypes.CONNECTIONREQUEST,
            wallet: wallet.id,
            senderDid: wallet.ownDid
        }).exec();
        if (!connReq) {
            return APIResult.badRequest('no corresponding connection request found');
        }
        return await module.exports.acceptResponse(wallet, connReq, message);
    },

    async receiveAcknowledgement(wallet, message) {
        log.debug('received acknowledgement');
        if (!(await indy.isPairwiseExists(wallet.handle, message.id))) {
            return APIResult.badRequest('unknown sender did, no pairwise exists');
        }
        log.debug('pairwise with sender did exists');
        const theirDid = message.id;
        const pairwise = await indy.getPairwise(wallet.handle, theirDid);
        const pairwiseMeta = JSON.parse(pairwise.metadata);
        const myDid = pairwise['my_did'];
        const myVk = await indy.keyForLocalDid(wallet.handle, myDid);
        const [, decryptedBuffer] = await indy.cryptoAuthDecrypt(
            wallet.handle,
            myVk,
            Buffer.from(message.message, 'base64')
        );
        const decryptedMessage = decryptedBuffer.toString('utf-8');
        // const decryptedMessage = lib.crypto.authDecrypt(wallet.handle, myVk, message.message);
        log.debug('params', theirDid, pairwise, pairwiseMeta, myDid, myVk);
        log.debug('successfully decrypted message', decryptedMessage);
        if (decryptedMessage !== 'success') {
            return APIResult.badRequest('unknown message string received');
        } else {
            return APIResult.accepted();
        }
    },

    async acceptRequest(wallet, connReq, connOffer) {
        log.debug('accepting request for \n wallet %j\n connReq %j\n connOffer %j\n', wallet, connReq, connOffer);
        const theirDid = connReq.did;
        let theirVk = connReq.verkey;
        const theirEndpointDid = connReq.endpointDid;
        let theirEndpoint = connReq.endpoint;
        let theirEndpointVk = connReq.endpointVk;
        const requestNonce = connReq.nonce;
        log.debug('initial params', theirDid, theirVk, theirEndpointDid, theirEndpoint, theirEndpointVk, requestNonce);
        // TODO we might have to check if there are any values on the ledger
        // and if there are whether they equal the values we were sent
        try {
            if (!theirEndpoint) {
                log.debug('theirEndpoint misssing, fetching from ledger');
                [theirEndpoint, theirEndpointVk] = await indy.getEndpointForDid(
                    wallet.handle,
                    pool.handle,
                    theirEndpointDid
                );
                log.debug('fetched theirEndpoint successfully', theirEndpoint, theirEndpointVk);
            }
            if (!theirEndpointVk) {
                log.debug('theirEndpointVk misssing, fetching from ledger');
                theirEndpointVk = await indy.keyForDid(pool.handle, wallet.handle, theirEndpointDid);
                log.debug('fetched theirEndpointVk successfully', theirEndpointVk);
            }
            if (!theirVk) {
                log.debug('theirVk misssing, fetching from ledger');
                theirVk = await indy.keyForDid(pool.handle, wallet.handle, theirDid);
                log.debug('fetched theirVk successfully', theirVk);
            }
        } catch (err) {
            log.debug(
                'failed to retrieve endpoint details for \n connReq %j\n connOffer %j\n err %j\n',
                connReq,
                connOffer,
                err
            );
            throw APIResult.badRequest('endpoint details missing from request and not found on ledger');
        }

        log.debug('creating connection response');
        const connRes = await lib.connection.createConnectionResponse(wallet, theirDid, requestNonce);
        log.debug('connection response created %j', connRes);
        const myDid = connRes.message.did;
        log.debug('myDid is ', myDid);
        const myVk = await indy.keyForLocalDid(wallet.handle, myDid);
        log.debug('myVk is ', myVk);
        log.debug('storing their did...');
        await indy.storeTheirDid(wallet.handle, {
            did: theirDid,
            verkey: theirVk
        });
        log.debug('storing their did: success');
        log.debug('storing their endpointdid...');
        await indy.storeTheirDid(wallet.handle, {
            did: theirEndpointDid,
            verkey: theirEndpointVk
        });
        log.debug('storing their endpointdid: success');
        log.debug('setting endpoint for endpointdid...');
        await indy.setEndpointForDid(wallet.handle, theirEndpointDid, theirEndpoint, theirEndpointVk);
        log.debug('setting endpoint for endpointdid: success');
        log.debug('creating pairwise...');
        await indy.createPairwise(
            wallet.handle,
            theirDid,
            myDid,
            JSON.stringify({
                theirEndpointDid: theirEndpointDid,
                theirEndpointVk: theirEndpointVk,
                theirEndpoint: theirEndpoint
            })
        );
        log.debug('creating pairwise: success');
        await Message.store(wallet.id, connRes.id, connRes.type, wallet.ownDid, theirDid, connRes);

        // TODO add flag in requests/response to ask for onboarding/writing on ledger
        // instead of doing it all the time (or should we just do it on acceptRequest?)
        // write dids to the ledger
        // log.debug('nym request 1');
        await pool.nymRequest(wallet.handle, wallet.ownDid, myDid, myVk);
        // log.debug('nym request 2');
        await pool.nymRequest(wallet.handle, wallet.ownDid, theirDid, theirVk);

        // anoncrypt inner message with theirDid
        log.debug('anoncrypting message');
        const anoncryptMessage = await lib.crypto.anonCrypt(theirVk, connRes.message);
        // anon crypt the whole connRes again and send it
        log.debug('sending anoncrypted message with', Object.assign({}, connRes, { message: anoncryptMessage }));
        await lib.message.sendAnoncryptMessage(
            pool.handle,
            wallet.handle,
            theirEndpointDid,
            // copy connRes and replace message with anoncrypted version
            Object.assign({}, connRes, { message: anoncryptMessage })
        );

        // return unencrypted connRes to caller
        return connRes;
    },

    async acceptResponse(wallet, connReq, connRes) {
        log.debug('accepting response for \n wallet %j\n connReq %j\n connRes %j\n', wallet, connReq, connRes);
        // decrypt message and retrieve their information
        const myDid = connRes.aud;
        const decryptedConnRes = await lib.crypto.anonDecrypt(wallet.handle, myDid, connRes.message);
        const theirDid = decryptedConnRes.did;
        const nonce = decryptedConnRes.nonce;
        let theirVk = decryptedConnRes.verkey;
        let pairwise;
        let pairwiseMeta;
        log.debug('initial params', myDid, theirDid, theirVk, nonce);
        log.debug('decryptedConnRes %j', decryptedConnRes);
        log.debug('comparing nonces', connReq.message.message.nonce, nonce);
        if (connReq.message.message.nonce !== nonce) {
            throw APIResult.badRequest('nonce mismatch');
        }
        // if there is no verkey in the response
        if (!theirVk) {
            // it must be on the ledger!
            log.debug('theirVk misssing, fetching from ledger');
            theirVk = await indy.keyForDid(pool.handle, wallet.handle, theirDid);
            log.debug('fetched theirVk successfully', theirVk);
        }

        pairwiseMeta = connReq.meta;
        log.debug('pairwiseMeta %j', connReq.meta);

        // set their information in the wallet
        // this somehow prevents following operations on the wallet
        // if it fails, i.e. we're trying to store a did twice, which
        // may happen since endpoint Dids do not change that often
        // see related jira: https://jira.hyperledger.org/browse/IS-802
        // try {
        //     log.debug('storing their endpointdid...');
        //     await indy.storeTheirDid(wallet.handle, {
        //         did: pairwiseMeta.theirEndpointDid,
        //         verkey: pairwiseMeta.theirEndpointVk
        //     });
        //     log.debug('storing their endpointdid: success');
        //     log.debug('setting endpoint for endpointdid...');
        //     await indy.setEndpointForDid(
        //         wallet.handle,
        //         pairwiseMeta.theirEndpointDid,
        //         pairwiseMeta.theirEndpoint,
        //         pairwiseMeta.theirEndpointVk
        //     );
        //     log.debug('setting endpoint for endpointdid: success');
        // } catch (err) {
        //     if (err.message !== '213') {
        //         throw err;
        //     }
        // }

        // create pairwise and store their information
        log.debug('storing their did...');
        await indy.storeTheirDid(wallet.handle, {
            did: theirDid,
            verkey: theirVk
        });
        log.debug('storing their did: success');
        log.debug('creating pairwise...');
        pairwise = await indy.createPairwise(
            wallet.handle,
            theirDid,
            connReq.message.message.did,
            JSON.stringify(pairwiseMeta)
        );
        log.debug('creating pairwise: success');

        // create connection ack
        log.debug('creating connection ack...');
        const connAck = await lib.connection.createConnectionAcknowledgement(myDid);
        log.debug('creating connection ack: success');
        log.debug('retrieve myVk');
        const myVk = await indy.keyForLocalDid(wallet.handle, myDid);
        log.debug('retrieve myVk: success', myVk);

        // write dids to the ledger
        // log.debug('nym request 1');
        // await pool.nymRequest(wallet.handle, wallet.ownDid, myDid, myVk);
        // log.debug('nym request 2');
        // await pool.nymRequest(wallet.handle, wallet.ownDid, theirDid, theirVk);

        // authcrypt inner message with myDid and theirDid
        log.debug('authcrypting message...');
        const authCryptedMessage = await lib.crypto.authCrypt(wallet.handle, myVk, theirVk, connAck.message);
        log.debug('authcrypting message: success');
        // anon crypt the whole connAck again (with theirEndpointDid) and send it
        await lib.message.sendAnoncryptMessage(
            pool.handle,
            wallet.handle,
            pairwiseMeta.theirEndpointDid,
            // copy connAck and replace message with authcrypted version
            Object.assign({}, connAck, { message: authCryptedMessage })
        );
        return connAck;
    }
};
