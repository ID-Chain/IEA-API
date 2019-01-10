/**
 * IDChain Agent Logger
 */

const log = require('pino')({ level: process.env.IDCHAIN_LOG_LEVEL });
const middleware = require('express-pino-logger')({
    logger: log
});

module.exports = { log, middleware };
