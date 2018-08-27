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
            type: lib.message.messageTypes.CONNECTIONOFFER,
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
        const theirDid = message.id;
        const pairwise = await indy.getPairwise(wallet.handle, theirDid);
        const pairwiseMeta = JSON.parse(pairwise.metadata);
        const myDid = pairwise['my_did'];
        const myVk = await indy.keyForLocalDid(wallet.handle, myDid);
        const decryptedMessage = lib.crypto.authDecrypt(wallet.handle, myVk, message.message);
        if (decryptedMessage !== 'success') {
            return APIResult.badRequest('unknown message string received');
        } else {
            return APIResult.accepted();
        }
    },

    async acceptRequest(wallet, connReq, connOffer) {
        const theirDid = connReq.did;
        let theirVk = connReq.verkey;
        const theirEndpointDid = connReq.endpointDid;
        let theirEndpoint = connReq.endpoint;
        let theirEndpointVk = connReq.endpointVk;
        const requestNonce = connReq.nonce;
        // TODO we might have to check if there are any values on the ledger
        // and if there are whether they equal the values we were sent
        try {
            if (!theirEndpoint) {
                [theirEndpoint, theirEndpointVk] = await indy.getEndpointForDid(
                    wallet.handle,
                    pool.handle,
                    theirEndpointDid
                );
            }
            if (!theirEndpointVk) {
                theirEndpointVk = await indy.keyForDid(pool.handle, wallet.handle, theirEndpointDid);
            }
            if (!theirVk) {
                theirVk = await indy.keyForDid(pool.handle, wallet.handle, theirDid);
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

        const connRes = await lib.connection.createConnectionResponse(wallet, theirDid, requestNonce);
        const myDid = connRes.message.did;
        const myVk = await indy.keyForLocalDid(wallet.handle, myDid);
        await indy.storeTheirDid(wallet.handle, {
            did: theirDid,
            verkey: theirVk
        });
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
        await indy.setEndpointForDid(wallet.handle, theirEndpointDid, theirEndpoint, theirEndpointVk);
        await Message.store(wallet.id, connRes.id, connRes.type, wallet.ownDid, theirDid, connRes);

        // write dids to the ledger
        await pool.nymRequest(wallet.handle, wallet.ownDid, myDid, myVk);
        await pool.nymRequest(wallet.handle, wallet.ownDid, theirDid, theirVk);

        // anoncrypt inner message with theirDid
        const anoncryptMessage = await lib.crypto.anonCrypt(theirVk, connRes.message);
        // anon crypt the whole connRes again and send it
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
        // decrypt message and retrieve their information
        const myDid = connRes.aud;
        const decryptedConnRes = await lib.crypto.anonDecrypt(wallet.handle, myDid, connRes.message);
        const theirDid = decryptedConnRes.did;
        const nonce = decryptedConnRes.nonce;
        let theirVk = decryptedConnRes.theirVk;
        let pairwise;
        let pairwiseMeta;
        if (connReq.message.nonce !== nonce) {
            throw APIResult.badRequest('nonce mismatch');
        }
        // if there is no verkey in the response
        if (!theirVk) {
            // it must be on the ledger!
            theirVk = await indy.keyForDid(pool.handle, wallet.handle, theirDid);
        }

        // create pairwise and store their information
        await indy.storeTheirDid(wallet.handle, {
            did: theirDid,
            verkey: theirVk
        });
        pairwiseMeta = connReq.meta;
        pairwise = await indy.createPairwise(
            wallet.handle,
            theirDid,
            connReq.message.did,
            JSON.stringify(pairwiseMeta)
        );

        // create connection ack
        const connAck = await lib.connection.createConnectionAcknowledgement(myDid);
        const myVk = await indy.keyForLocalDid(wallet.handle, myDid);

        // write dids to the ledger
        await pool.nymRequest(wallet.handle, wallet.ownDid, myDid, myVk);
        await pool.nymRequest(wallet.handle, wallet.ownDid, theirDid, theirVk);

        // authcrypt inner message with myDid and theirDid
        const authCryptedMessage = await lib.crypto.authCrypt(wallet.handle, myVk, theirVk, connAck.message);
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
