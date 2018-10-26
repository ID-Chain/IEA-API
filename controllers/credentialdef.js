/**
 * IDChain Agent REST API
 * Credential Definition Controller
 */

const indy = require('indy-sdk');

const CredDef = require('../models/credentialdef');
const wrap = require('../asyncwrap').wrap;
const pool = require('../pool');
const APIResult = require('../api-result');
const fs = require('fs');

module.exports = {
    create: wrap(async (req, res, next) => {
        const submitterDid = req.wallet.ownDid;
        const schemaId = req.body.schemaId;
        const supportRevocation = req.body.supportRevocation || false;
        const [, schema] = await pool.getSchema(submitterDid, schemaId);
        const [credDefId, credDef] = await indy.issuerCreateAndStoreCredentialDef(
            req.wallet.handle,
            req.wallet.ownDid,
            schema,
            'TAG1',
            'CL',
            { support_revocation: supportRevocation }
        );
        const response = await pool.credDefRequest(req.wallet.handle, req.wallet.ownDid, credDef);

        let doc = {
            credDefId: credDefId,
            wallet: req.wallet.id,
            data: response['result']
        };
        if (supportRevocation) {
            const blobStorageWriter = await pool.openBlobStorageWriter();
            // supported config keys depend on credential type
            // currently, indy only supports CL_ACCUM as credential type
            // the max_cred_num is set to 100 to prevent this code from taking too long to generate tails
            // note that tails occupy  256 * max_cred_num bytes + 130 bytes of the header
            const revocRegConfig = {
                issuance_type: 'ISSUANCE_ON_DEMAND',
                max_cred_num: 100
            };
            const [revocRegId, revocRegDef, revocRegEntry] = await indy.issuerCreateAndStoreRevocReg(
                req.wallet.handle,
                req.wallet.ownDid,
                null,
                'TAG1',
                credDefId,
                revocRegConfig,
                blobStorageWriter
            );
            await pool.revocRegDefRequest(req.wallet.handle, req.wallet.ownDid, revocRegDef);
            await pool.revocRegEntryRequest(
                req.wallet.handle,
                req.wallet.ownDid,
                revocRegId,
                revocRegDef.revocDefType,
                revocRegEntry
            );
            doc.revocRegId = revocRegId;
            doc.revocRegType = revocRegDef.revocDefType;

            // read back  the tails from the file created by default Indy BlobStorageWriter
            fs.readFile(revocRegDef.tailsLocation, (err, data) => {
                if (err) throw err;
                doc.revocRegTails = data;
            });
            // todo: validate the hash of `doc.revocRegTails` using value of `revocRegDef.tailsHash`
        }

        const credDefDoc = await new CredDef(doc).save();
        next(new APIResult(201, { credDefId: credDefDoc.credDefId }));
    }),

    list: wrap(async (req, res, next) => {
        const w = await CredDef.find({ wallet: req.wallet.id }).exec();
        next(new APIResult(200, w));
    }),

    retrieve: wrap(async (req, res, next) => {
        const credDefId = req.params.credDefId;
        const submitterDid = req.wallet.ownDid;
        const [, credDef] = await pool.getCredDef(submitterDid, credDefId);
        next(new APIResult(200, credDef));
    }),

    retrieveTails: wrap(async (req, res, next) => {
        CredDef.findOne({ credDefId: req.credDefId }, function(err, tails) {
            if (err) next(new APIResult(404));
            else next(new APIResult(200, tails.toString('base64')));
        });
    })
};
