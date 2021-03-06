/**
 * IDChain Agent REST API
 * Models
 */

const User = require('./user');
const Wallet = require('./wallet');
const Message = require('./message');
const IndySchema = require('./indy-schema');
const Schema = require('./schema');
const CredentialDefinition = require('./credentialdef');
const Proof = require('./proof');
const ProofRequestTemplate = require('./proof-request-template');

module.exports = {
    User,
    Wallet,
    Message,
    IndySchema,
    Schema,
    CredentialDefinition,
    Proof,
    ProofRequestTemplate
};
