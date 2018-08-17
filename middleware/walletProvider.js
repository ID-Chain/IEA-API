/**
 * IDChain Agent REST API
 * Wallet Provider Middleware
 */

const { wrap, wrapEx } = require('../asyncwrap');
const log = require('../log').log;
const NotFound = require('../error').NotFound;
const Wallet = require('../models/wallet');

/**
 * Finds and opens the wallet with walletId of user
 * and provides it through req.wallet for further
 * processing
 * @param {Object} req request object
 * @param {String} walletId wallet name
 * @return {Object} the wallet object
 */
async function provideWallet(req, walletId) {
    log.info('providing wallet with walletId %s for user %s', walletId, req.user.username);
    const w = await Wallet.findOne({
        _id: walletId,
        owner: req.user
    }).exec();
    if (!w) throw new NotFound('Wallet not found');
    try {
        await w.open();
    } catch (err) {
        log.info(err);
        await w.close();
        await w.open();
    }
    req.wallet = w;
    return w;
}

module.exports = {
    before: wrap(async (req, res, next) => {
        log.debug('walletProvider before');
        const walletId = req.body.wallet || req.params.wallet || req.header('wallet');
        if (!walletId || !req.user) return next();
        await provideWallet(req, walletId);
        next();
    }),

    param: wrapEx(async (req, res, next, walletId) => {
        log.debug('walletProvider param');
        await provideWallet(req, walletId);
        next();
    }),

    after: [
        wrap(async (req, res, next) => {
            log.debug('walletProvider after');
            if (req.wallet) await req.wallet.close();
            next();
        }),
        wrapEx(async (result, req, res, next) => {
            log.debug('walletProvider after result-handler');
            if (req.wallet) await req.wallet.close();
            next(result);
        })
    ]
};
