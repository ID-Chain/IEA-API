const log = require('../log').log;
const apiResult = new (require('../api-result'))(404, { message: 'Sorry, there is nothing here.' });

module.exports = (req, res, next) => {
    log.debug('404 middleware');
    next(apiResult);
};
