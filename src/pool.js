/**
 * IDChain Agent REST API
 * Pool Ledger Representation
 */

const PoolLedger = require('./lib/ledger');

const poolLedger = new PoolLedger(process.env.POOL_NAME, {
    genesis_txn: process.env.GENESIS_TXN
});

module.exports = poolLedger;
