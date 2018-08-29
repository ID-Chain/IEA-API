/**
 * IDCHain Agent REST API
 * Role Model
 */

const Mongoose = require('../db');

const schema = new Mongoose.Schema({
    title: {
        type: String,
        index: true,
        unique: true,
        required: true
    },
    permissions: {
        type: [String]
    }
});

module.exports = Mongoose.model('Role', schema);
