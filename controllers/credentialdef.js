/**
 * IDChain Agent REST API
 * Credential Definition Controller
 */

const indy = require('indy-sdk');

const CredDef = require('../models/credentialdef');
const RevocRegistry = require('../models/revocation-registry');
const wrap = require('../asyncwrap').wrap;
const pool = require('../pool');
const revocationLib = require('../lib/revocation-registry');
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

        // todo: check if this response contains credDef as it was stored in ledger
        // normally we have top read `credDef` back from ledger
        // because the back reference to the schema txn in it is added by validator(s)
        // The credDef w/o back reference cannot be used further in indy anoncred API

        let doc = {
            credDefId: credDefId,
            wallet: req.wallet.id,
            data: response['result']
        };

        let tailsdoc = {};

        if (supportRevocation) {
            let blobStorageConfig = { base_dir: revocationLib.tailsBaseDir, uri_pattern: '' };
            // TODO: investigate the purpose of uri_pattern

            const blobStorageWriter = await revocationLib.openBlobStorageWriter(blobStorageConfig);
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

            let tailsFileLocation = revocRegDef['tailsLocation'];
            // change the URL of tails from file path to the context path
            revocRegDef['tailsLocation'] = '/tails/' + revocRegId + '/';
            // store resulting revocation registry definition to the ledger
            await pool.revocRegDefRequest(req.wallet.handle, req.wallet.ownDid, revocRegDef);
            // store first value of the accumulator
            await pool.revocRegEntryRequest(
                req.wallet.handle,
                req.wallet.ownDid,
                revocRegId,
                revocationLib.revocationType,
                revocRegEntry
            );
            doc.revocRegId = revocRegId;
            doc.revocRegType = revocRegDef.revocDefType;

            tailsdoc.revocRegDefId = revocRegId;
            tailsdoc.hash = revocRegDef['tailsHash'];
            // foreign key
            tailsdoc.credDefId = credDefId;

            // read back the tails from the file created by blobstoragewriter
            fs.readFile(tailsFileLocation, (err, data) => {
                if (err) throw err;
                tailsdoc.data = data;
            });
            // todo: delete the file
            // todo: validate the hash of `doc.revocRegTails` using value of `revocRegDef.tailsHash`
        }

        const credDefDoc = await new CredDef(doc).save();
        if (supportRevocation) {
            await new RevocRegistry(tailsdoc).save();
        }
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
        RevocRegistry.findOne({ revocRegDefId: req.revocRegDefId }, function(err, tails) {
            if (err) next(new APIResult(404));
            // TODO: export as binary instead of base64
            else next(new APIResult(200, tails.toString('base64')));
        });
    })
};
