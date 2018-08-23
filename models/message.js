const Mongoose = require('../db');
const MessageTypes = require('../lib').message.messageTypes;

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
    senderDid: {
        type: String
    },
    recipientDid: {
        type: String
    },
    message: {
        type: Mongoose.Schema.Types.Mixed,
        required: true
    },
    meta: {}
});

schema.set('toJSON', {
    versionKey: false,
    transform: (doc, ret, game) => {
        ret.id = String(ret._id);
        delete ret._id;
    }
});

schema.statics.findConnectionOfferById = function(id, wallet) {
    return this.findTypeById(id, wallet, MessageTypes.CONNECTIONOFFER);
};

schema.statics.findConnectionRequestById = function(id, wallet) {
    return this.findTypeById(id, wallet, MessageTypes.CONNECTIONREQUEST);
};

schema.statics.findConnectionResponseById = function(id, wallet) {
    return this.findTypeById(id, wallet, MessageTypes.CONNECTIONRESPONSE);
};

schema.statics.findTypeById = function(id, wallet, type) {
    return this.findOne({
        _id: id,
        wallet: wallet.id,
        type: type
    });
};

schema.statics.storeConnectionOffer = function(wallet, connectionOffer, role) {
    const {
        id,
        type,
        message: { did },
        message
    } = connectionOffer;
    return this.store(wallet.id, id, type, did, null, message, role);
};

schema.statics.store = function(walletId, messageId, messageType, senderDid, recipientDid, message, meta) {
    return new this({
        wallet: walletId,
        messageId: messageId,
        type: messageType,
        senderDid: senderDid,
        recipientDid: recipientDid,
        message: message,
        meta: meta
    }).save();
};

module.exports = Mongoose.model('Message', schema);
