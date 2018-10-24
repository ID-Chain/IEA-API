/**
 * IDChain Agent REST API Routes
 */

const router = require('express').Router();

const auth = require('../middleware/auth');
const walletProvider = require('../middleware/walletProvider');
const user = require('../controllers/user');
const wallet = require('../controllers/wallet');
const schema = require('../controllers/credentialschema');
const creddef = require('../controllers/credentialdef');
const transactions = require('../controllers/transactions');
const message = require('../controllers/message');
const nym = require('./nym');

const connectionOffer = require('./connection-offer');
const connectionRequest = require('./connection-request');
const connectionResponse = require('./connection-response');
const connection = require('./connection');
const credentialOffer = require('./credential-offer');
const credentialRequest = require('./credential-request');
const credential = require('./credential');
const proofRequest = require('./proof-request');

router
    .route('/user')
    // TODO rate-limiting?
    .post(user.create);

router.post('/login', auth.login);

router.use(auth);
router.use(walletProvider.before);

router
    .route('/user/:user')
    .get(user.retrieve)
    .put(user.update)
    .delete(user.delete);

router
    .route('/wallet')
    .get(wallet.list)
    .post(wallet.create);

router
    .route('/wallet/:wallet')
    .get(wallet.retrieve)
    .delete(wallet.delete);

router.use('/connectionoffer', connectionOffer);

router.use('/connectionrequest', connectionRequest);

router.use('/connectionresponse', connectionResponse);

router.use('/connection', connection);

router
    .route('/schema')
    .get(schema.list)
    .post(schema.create);

router.route('/schema/:schema/').get(schema.retrieve);

router.use('/credentialoffer', credentialOffer);

router.use('/credentialrequest', credentialRequest);

router.use('/credential', credential);

router
    .route('/credentialdef/')
    .get(creddef.list)
    .post(creddef.create);

router.route('/credentialdef/:credDefId/').get(creddef.retrieve);

router.use('/proofRequest', proofRequest);

// router.route('/proof').post(proof.createProof);
//
// router.route('/proofverification').post(proof.verifyProof);

router.route('/transactions').get(transactions.list);

router
    .route('/message')
    .get(message.list)
    .post(message.sendMessage);

router
    .route('/message/:messageId')
    .get(message.retrieve)
    .delete(message.delete);

router.use('/nym', nym);

router.use(walletProvider.after);

module.exports = router;
