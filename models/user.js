/**
 * IDCHain Agent REST API
 * User Model
 */

const SALTROUNDS = parseInt(process.env.SALTROUNDS);
const bcrypt = require('bcrypt');
const Mongoose = require('../db');
const WalletProvider = require('../middleware/walletProvider');
const Permissions = require('../models/permissions');

const schema = new Mongoose.Schema({
    // TODO should we use email instead?
    username: {
        type: String,
        index: true,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    wallet: {
        type: String,
        ref: 'Wallet'
    },
    permissions: {
        type: [String],
        enum: Object.values(Permissions.allPermissions)
    },
    role: {
        type: String
    }
});

schema.pre('save', async function() {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, SALTROUNDS);
    }
});

schema.pre('remove', async function() {
    // We need to call it this way to ensure that the remove hook
    // of each wallet is called and delete cascades properly
    // Per mongoose doc: Model.remove does not call the remove hook
    // only instance-level remove does
    const Wallet = Mongoose.model('Wallet');
    let wallets = await Wallet.find({ owner: this._id }).exec();
    for (const w of wallets) {
        if (WalletProvider.isCached(w)) {
            await WalletProvider.provideHandle(w);
        }
        await w.remove();
    }
});

schema.methods.checkPassword = async function(password) {
    return bcrypt.compare(password, this.password);
};

module.exports = Mongoose.model('User', schema);
