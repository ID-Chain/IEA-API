const sdk = require('indy-sdk');

const DefaultSignatureType = 'CL';

module.exports = {
    DefaultSignatureType,

    /**
     * Create and send a credential definition to the ledger
     * @param {number} walletHandle
     * @param {Pool} ledger
     * @param {string} submitterDid
     * @param {string} schemaId
     * @param {string} [tag] default: 'TAG1'
     * @param {string} [signatureType] default: 'CL'
     * @param {boolean} [supportRevocation] default: false
     * @return {Promise<Any[]>} [credDefId, credDef] - credential definition is
     * retrieved from ledger so it includes seqNo (which is subsequently needed by indy-sdk)
     */
    async create(
        walletHandle,
        ledger,
        submitterDid,
        schemaId,
        // todo: check if default values have to be assigned here or elsewhere
        tag = 'TAG1',
        signatureType = DefaultSignatureType,
        supportRevocation = false
    ) {
        // retrieve schema and create credential definition
        const [, schema] = await ledger.getSchema(submitterDid, schemaId);
        const [credDefId, data] = await sdk.issuerCreateAndStoreCredentialDef(
            walletHandle,
            submitterDid,
            schema,
            tag,
            signatureType,
            { support_revocation: supportRevocation }
        );
        // push credential definition on ledger and retrieve it again
        await ledger.credDefRequest(walletHandle, submitterDid, data);
        const [, credDef] = await ledger.getCredDef(submitterDid, credDefId);
        return [credDefId, credDef];
    }
};
