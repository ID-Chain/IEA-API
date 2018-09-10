/**
 * IDCHain Agent REST API
 * Role Model
 */

const Mongoose = require('../db');
const permissions = require('./permissions').allPermissions;

const schema = new Mongoose.Schema({
    title: {
        type: String,
        index: true,
        unique: true,
        required: true
    },
    permissions: {
        type: [String],
        enum: Object.values(permissions)
    }
});

module.exports = Mongoose.model('Role', schema);
