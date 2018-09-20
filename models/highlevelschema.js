const Mongoose = require('../db');

var Mixed = Mongoose.Schema.Types.Mixed;

const schema = new Mongoose.Schema({
    // TODO Check if extra id is needed on top of name
    // should name be primary key
    created: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String,
        required: true
    },
    version: {
        type: String,
        required: true,
        default: null
    },
    data: Mixed
});


module.exports = Mongoose.model('HSchema', schema);
