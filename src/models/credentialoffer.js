/**
 * IDCHain Agent REST API
 * Schema Model
 */

const Mongoose = require('../db');
const indy = require('indy-sdk');
const wrap = require('../asyncwrap').wrap;
const pool = require('../pool');
var Mixed = Mongoose.Schema.Types.Mixed;

const schema = new Mongoose.Schema({
    created: {
        type: Date,
        default: Date.now
    },
    credDefId: String,
    wallet: {
        type: String,
        ref: 'Wallet'
    },
    data: Mixed
});

module.exports = Mongoose.model('CredentialOffer', schema);
