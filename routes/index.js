/**
 * IDChain Agent REST API Routes
 */

const router = require('express').Router();

const auth = require('../middleware/auth');
const walletProvider = require('../middleware/walletProvider');
const user = require('../controllers/user');
const wallet = require('../controllers/wallet');
const connection = require('../controllers/connection');
const schema = require('../controllers/credentialschema');
const creddef = require('../controllers/credentialdef');
const credential = require('../controllers/credential');
const credoffer = require('../controllers/credentialoffer');
const proof = require('../controllers/proof');
const endpoint = require('../controllers/endpoint');

router
  .route('/users')
  // TODO rate-limiting?
  .post(user.create);

router
  .route('/endpoints')
  .get(endpoint.retrieve)
  .post(endpoint.handle);

router.use(auth);
router.use(walletProvider.before);
router.param('wallet', walletProvider.param);

router
  .route('/users/:user')
  .get(user.retrieve)
  .put(user.update)
  .delete(user.delete);

router
  .route('/wallets')
  .get(wallet.list)
  .post(wallet.create);

router
  .route('/wallets/:wallet')
  .get(wallet.retrieve)
  .delete(wallet.delete);

router.route('/connections/offers').post(connection.create);

router.route('/connections').post(connection.accept);

router
  .route('/schemas')
  .get(schema.list)
  .post(schema.create);

router.route('/schemas/:schema/').get(schema.retrieve);

router
  .route('/credentials/definitions')
  .get(creddef.list)
  .post(creddef.create);

router.route('/credentials/definitions/:credDefId').get(creddef.retrieve);

router.route('/credentials/offers').post(credoffer.create);

router.route('/credentials/requests').post(credoffer.accept);

router.route('/credentials/issue').post(credential.issue);

router
  .route('/credentials')
  .get(credential.list)
  .post(credential.store);

router.route('/credentials/:credId').get(credential.retrieve);

router.route('/proofs/requests').post(proof.createProofRequest);
router.route('/proof/requests/:proofReq').get(proof.getProofRequest);

router.route('/proofs').post(proof.createProof);

router.route('/proofs/verifications').post(proof.verifyProof);

router.use(walletProvider.after);

module.exports = router;
