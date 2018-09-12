const indy = require('indy-sdk');
const wrap = require('../asyncwrap').wrap;
const pool = require('../pool');
const log = require('../log').log;
const APIResult = require('../api-result');
const ProofRequest = require('../models/proofreq');
const Credential = require('../models/credential');

module.exports = {
    // Called by Verifier
    createProofRequest: wrap(async (req, res, next) => {
        const recipientDid = req.body.recipientDid;
        const proofReqJson = req.body.proofRequest;
        const senderDid = await req.wallet.getMyPairwiseDid(recipientDid);
        const recipientVk = await indy.keyForDid(pool.handle, req.wallet.handle, recipientDid);
        const senderVk = await indy.keyForDid(pool.handle, req.wallet.handle, senderDid);
        let proofReq = new ProofRequest({
            wallet: req.wallet,
            recipient: recipientDid
        });
        proofReq = await proofReq.save();
        proofReqJson['id'] = proofReq.id;
        proofReqJson['nonce'] = proofReq.nonce;
        proofReq.data = proofReqJson;
        await proofReq.save();
        const cryptProofReq = await req.wallet.authCrypt(senderVk, recipientVk, proofReq.data);
        res.set('location', `proofrequest/${proofReq.id}`);
        next(new APIResult(201, { encryptedProofRequest: cryptProofReq }));
    }),

    // Called by Verifier
    getProofRequest: wrap(async (req, res, next) => {
        // FIXME check ownership
        const proofReq = await ProofRequest.findById(req.params.proofReq);
        next(new APIResult(200, proofReq));
    }),

    // Called by IDHolder
    createProof: wrap(async (req, res, next) => {
        // TODO Test with predicates
        const [recipientDid, recipientVk, senderVk, proofReq] = await req.wallet.tryAuthDecrypt(
            req.body.encryptedProofRequest
        );

        // get necessary credentials, schemas, creddefs, revStates, ...
        const creds = await indy.proverGetCredentialsForProofReq(req.wallet.handle, proofReq);
        let someCredId = '';
        let credsForProof = {};
        let requestedCredentials = {
            self_attested_attributes: {},
            requested_attributes: {},
            requested_predicates: {}
        };
        for (const k in creds['attrs']) {
            if (!creds['attrs'].hasOwnProperty(k)) continue;
            if (creds['attrs'][k].length > 0) {
                const credForAttr = creds['attrs'][k][0]['cred_info'];
                credsForProof[`${credForAttr['referent']}`] = credForAttr;
                requestedCredentials['requested_attributes'][k] = {
                    cred_id: credForAttr['referent'],
                    revealed: true
                };
                someCredId = someCredId || credForAttr['referent'];
            } else if (
                proofReq['requested_attributes'].hasOwnProperty(k) &&
                !proofReq['requested_attributes'][k].hasOwnProperty('restrictions')
            ) {
                const item = proofReq['requested_attributes'][k];
                if (!req.body.selfAttestedAttributes.hasOwnProperty(item.name)) {
                    return next(new APIResult(400, { message: `missing self-attested-attribute ${item.name}` }));
                }
                requestedCredentials['self_attested_attributes'][k] = req.body.selfAttestedAttributes[item.name];
            } else {
                return next(new APIResult(400));
            }
        }
        for (const k in creds['predicates']) {
            if (!creds['predicates'].hasOwnProperty(k)) continue;
            const credForPredicate = creds['predicates'][k][0]['cred_info'];
            credsForProof[`${credForPredicate['referent']}`] = credForPredicate;
            requestedCredentials['requested_predicates'][k] = {
                cred_id: credForPredicate['referent']
            };
        }
        const [schemas, credDefs, revStates] = await pool.proverGetEntitiesFromLedger(recipientDid, credsForProof);

        // retrieve masterSecretName from one of the used credentials
        // NOTE: we can only give one masterSecretName to the proof creation function,
        // how is the creation of a proof with multiple credentials handled?
        const someCredential = await Credential.findOne({ credId: someCredId }).exec();
        const masterSecretName = someCredential.masterSecretName;

        // create and encrypt proof
        // order recipient <-> sender is reversed since this is a response
        const proofJson = await indy.proverCreateProof(
            req.wallet.handle,
            proofReq,
            requestedCredentials,
            masterSecretName,
            schemas,
            credDefs,
            revStates
        );
        proofJson.proofReqId = proofReq.id;
        const cryptProof = await req.wallet.authCrypt(recipientVk, senderVk, proofJson);

        next(new APIResult(201, { encryptedProof: cryptProof }));
    }),

    verifyProof: wrap(async (req, res, next) => {
        const [recipientDid, recipientVk, senderVk, proofJson] = await req.wallet.tryAuthDecrypt(
            req.body.encryptedProof
        );
        const proofReqDoc = await ProofRequest.findById(proofJson.proofReqId).exec();
        const [schemas, credDefs, revRegDefs, revRegs] = await pool.verifierGetEntitiesFromLedger(
            recipientDid,
            proofJson['identifiers']
        );
        const isValid = await indy.verifierVerifyProof(
            proofReqDoc.data,
            proofJson,
            schemas,
            credDefs,
            revRegDefs,
            revRegs
        );
        next(
            new APIResult(200, {
                proof: proofJson,
                isValid: isValid
            })
        );
    }),

    async request(wallet, message) {
        // TODO
        return new APIResult(501, { message: 'not implemented' });
    },

    async proof(wallet, message) {
        // TODO
        return new APIResult(501, { message: 'not implemented' });
    }
};
