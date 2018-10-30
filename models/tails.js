/**
 * IDChain Agent REST API
 * Revocation registry model
 */

const Mongoose = require('../db');
const Mixed = Mongoose.Schema.Types.Mixed;

const schema = new Mongoose.Schema({
    created: {
        type: Date,
        default: Date.now
    },
    revocRegDefId: {
        type: String,
        index: true
    },
    tails: Mixed
});

module.exports = Mongoose.model('RevocationRegistry', schema);
