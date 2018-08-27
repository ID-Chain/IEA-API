const Mongoose = require('../db');

const schema = new Mongoose.Schema({
    wallet: {
        type: String,
        ref: 'Wallet',
        required: true,
        index: true
    },
    messageId: {
        type: String,
        required: true,
        index: true
    },
    type: {
        type: String,
        required: true
    },
    message: {
        type: Mongoose.Schema.Types.Mixed,
        required: true
    }
});

schema.set('toJSON', {
    versionKey: false,
    transform: (doc, ret, game) => {
        ret.id = String(ret._id);
        delete ret._id;
    }
});

schema.statics.store = function(walletId, messageId, messageType, message) {
    return new this({
        wallet: walletId,
        messageId: messageId,
        type: messageType,
        message: message
    }).save();
};

module.exports = Mongoose.model('Message', schema);