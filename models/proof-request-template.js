/**
 * IDChain Agent REST API
 * Proof Request Template Model
 */

const Mongoose = require('../db');
const Mixed = Mongoose.Schema.Types.Mixed;

const schema = new Mongoose.Schema(
    {
        wallet: {
            type: String,
            ref: 'Wallet',
            required: true,
            index: true
        },
        template: {
            type: Mixed,
            required: true
        }
    },
    { timestamps: true, minimize: false }
);

schema.set('toJSON', {
    versionKey: false,
    transform: (doc, ret, game) => {
        ret.id = String(ret._id);
        delete ret._id;
    }
});

module.exports = Mongoose.model('ProofRequestTemplate', schema);
