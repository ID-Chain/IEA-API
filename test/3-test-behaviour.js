/**
 * IDChain Agent REST API
 * API Tests
 * Tests onboarding
 */
'use strict';

const uuidv4 = require('uuid/v4');
const mocha = require('mocha');
const expect = require('chai').expect;

const vars = require('./0-test-vars');
const describe = mocha.describe;
const after = mocha.after;
const it = mocha.it;

const agent = vars.agent;
const acceptHeader = vars.acceptHeader;
const bothHeaders = vars.bothHeaders;
let users = vars.users;
let wallets = vars.wallets;
let valuesToDelete = [];
let connectionOffer;

let issuer;
let holder;
let rp;
let credDefId;
let holderIssuerDid;
let holderRPDid;

describe('behaviour', function() {
  describe('prepare for tests', function() {
    it('should create users', async function() {
      this.timeout(60000);
      for (const u of users) {
        const res = await agent
          .post('/users')
          .set(bothHeaders)
          .send(u)
          .expect(201);
        const id = res.get('location').substring(7);
        u.id = id;
        valuesToDelete.push({
          id: id,
          auth: [u.username, u.password],
          path: 'users',
        });
      }
    });
    it('should create wallets', async function() {
      this.timeout(60000);
      for (let i = 0; i < wallets.length; i++) {
        const res = await agent
          .post('/wallets')
          .auth(users[i].username, users[i].password)
          .set(bothHeaders)
          .send(wallets[i])
          .expect(201);
        expect(res.body).to.have.all.keys(
          'id',
          'created',
          'poolName',
          'ownDid',
          'owner',
          'xtype',
          'config',
          'credentials'
        );
        wallets[i] = res.body;
        valuesToDelete.push({
          id: wallets[i].id,
          auth: [users[i].username, users[i].password],
          path: 'wallet',
        });
      }
    });
  });

  describe('onboarding', function() {
    it('steward should create connection offers for issuer with role TRUST_ANCHOR',
      async function() {
        this.timeout(60000);
        const res = await agent
          .post('/connections/offers')
          .auth(users[0].username, users[0].password)
          .set(bothHeaders)
          .send({wallet: wallets[0].id, role: 'TRUST_ANCHOR'})
          .expect(201);
        expect(res.body).to.have.all.keys('did', 'nonce', 'role');
        expect(res.body.role).to.equal('TRUST_ANCHOR');
        connectionOffer = res.body;
    });
    it('issuer should accept connections offer from steward', async function() {
      this.timeout(60000);
      const res = await agent
        .post('/connections')
        .auth(users[1].username, users[1].password)
        .set(bothHeaders)
        .send({wallet: wallets[1].id, connectionOffer: connectionOffer})
        .expect(200);
      expect(res.body).to.have.all.keys('myDid', 'theirDid');
    });
    it('issuer should should NOT accept connection offer from steward repeatedly', async function() {
      this.timeout(60000);
      await agent
        .post('/connections')
        .auth(users[1].username, users[1].password)
        .set(bothHeaders)
        .send({wallet: wallets[1].id, connectionOffer: connectionOffer})
        .expect(404);
    });
    it('steward should create connection offer for relying party with role TRUST_ANCHOR', async function() {
      this.timeout(60000);
      const res = await agent
        .post('/connections/offers')
        .auth(users[0].username, users[0].password)
        .set(bothHeaders)
        .send({wallet: wallets[0].id, role: 'TRUST_ANCHOR'})
        .expect(201);
      expect(res.body).to.have.all.keys('did', 'nonce', 'role');
      expect(res.body.role).to.equal('TRUST_ANCHOR');
      connectionOffer = res.body;
    });
    it('relying party should accept connection offer from steward', async function() {
      this.timeout(60000);
      const res = await agent
        .post('/connections')
        .auth(users[3].username, users[3].password)
        .set(bothHeaders)
        .send({wallet: wallets[3].id, connectionOffer: connectionOffer})
        .expect(200);
      expect(res.body).to.have.all.keys('myDid', 'theirDid');
    });
    it('issuer (TRUST_ANCHOR) should create connection offer for holder with role NONE',
      async function() {
        this.timeout(60000);
        const res = await agent
          .post('/connections/offers')
          .auth(users[1].username, users[1].password)
          .set(bothHeaders)
          .send({wallet: wallets[1].id})
          .expect(201);
        expect(res.body).to.have.all.keys('did', 'nonce', 'role');
        expect(res.body.role).to.equal('NONE');
        connectionOffer = res.body;
    });
    it('holder should accept connection offer from issuer', async function() {
      this.timeout(60000);
      const res = await agent
        .post('/connections')
        .auth(users[2].username, users[2].password)
        .set(bothHeaders)
        .send({wallet: wallets[2].id, connectionOffer: connectionOffer})
        .expect(200);
      expect(res.body).to.have.all.keys('myDid', 'theirDid');
      holderIssuerDid = res.body.myDid;
    });
    it('holder (NONE) should NOT be able to create connectionOffers', async function() {
      this.timeout(60000);
      await agent
        .post('/connections/offers')
        .auth(users[2].username, users[2].password)
        .set(bothHeaders)
        .send({wallet: wallets[2].id})
        .expect(400);
    });
  });

  describe('credentials', function() {
    let schemaId;
    let credentialOffer;
    let credentialRequest;
    let credential;
    let credentialId;
    it('should prepare variables', async function() {
      this.timeout(60000);
      issuer = Object.assign({}, users[1], {wallet: wallets[1]});
      holder = Object.assign({}, users[2], {wallet: wallets[2]});
      rp = Object.assign({}, users[3], {wallet: wallets[3]});
    });
    it('issuer should create a schema', async function() {
      this.timeout(60000);
      const res = await agent
        .post('/schemas')
        .auth(issuer.username, issuer.password)
        .set(bothHeaders)
        .send({
          wallet: issuer.wallet.id,
          name: 'Passport-' + uuidv4(),
          version: '0.1',
          attrNames: ['firstname', 'lastname', 'yearOfBirth'],
        })
        .expect(201);
      expect(res.body).to.have.property('schemaId');
      schemaId = res.body.schemaId;
    });
    it('issuer should create a credential definition', async function() {
      this.timeout(60000);
      const res = await agent
        .post('/credentials/definitions')
        .auth(issuer.username, issuer.password)
        .set(bothHeaders)
        .send({
          wallet: issuer.wallet.id,
          schemaId: schemaId,
          // FIXME add another test WITH revocation as soon as revocation is supported by proofs
          supportRevocation: false,
        })
        .expect(201);
      expect(res.body).to.have.property('credDefId');
      credDefId = res.body.credDefId;
    });
    it('issuer should create a credential offer', async function() {
      this.timeout(60000);
      const res = await agent
        .post('/credentials/offers')
        .auth(issuer.username, issuer.password)
        .set(bothHeaders)
        .send({
          wallet: issuer.wallet.id,
          recipientDid: holderIssuerDid,
          credDefId: credDefId,
        })
        .expect(201);
      expect(res.body).to.have.property('encryptedCredentialOffer');
      credentialOffer = res.body.encryptedCredentialOffer;
    });
    it('holder should accept credential offer and create credential request', async function() {
      this.timeout(60000);
      const res = await agent
        .post('/credentials/requests')
        .auth(holder.username, holder.password)
        .set(bothHeaders)
        .send({
          wallet: holder.wallet.id,
          encryptedCredentialOffer: credentialOffer,
        })
        .expect(201);
      expect(res.body).to.have.property('encryptedCredentialRequest');
      credentialRequest = res.body.encryptedCredentialRequest;
    });
    it('issuer should accept credential request and issue credential', async function() {
      this.timeout(60000);
      const res = await agent
        .post('/credentials/issue')
        .auth(issuer.username, issuer.password)
        .set(bothHeaders)
        .send({
          wallet: issuer.wallet.id,
          encryptedCredentialRequest: credentialRequest,
          values: {
            firstname: 'Alice',
            lastname: 'Doe',
            yearOfBirth: '1999',
          },
        })
        .expect(201);
      expect(res.body).to.have.property('encryptedCredential');
      credential = res.body.encryptedCredential;
    });
    it('holder should store credential', async function() {
      this.timeout(60000);
      const res = await agent
        .post('/credentials')
        .auth(holder.username, holder.password)
        .set(bothHeaders)
        .send({
          wallet: holder.wallet.id,
          encryptedCredential: credential,
        })
        .expect(200);
      expect(res.body).to.have.property('credentialId');
      credentialId = res.body.credentialId;
    });
    it('holder should be able to retrieve credential', async function() {
      this.timeout(60000);
      const res = await agent
        .get(`/credentials/${credentialId}`)
        .auth(holder.username, holder.password)
        .set(bothHeaders)
        .set({wallet: holder.wallet.id})
        .expect(200);
      expect(res.body).to.be.an('object');
      // TODO add more checks after standardizing output
    });
  });

  describe('proofs', function() {
    let proofRequest;
    let proof;
    it(
      'relying party (TRUST_ANCHOR) should create connection offer ' +
        'for holder with role NONE',
      async function() {
        this.timeout(60000);
        const res = await agent
          .post('/connections/offers')
          .auth(rp.username, rp.password)
          .set(bothHeaders)
          .send({wallet: rp.wallet.id})
          .expect(201);
        expect(res.body).to.have.all.keys('did', 'nonce', 'role');
        expect(res.body.role).to.equal('NONE');
        connectionOffer = res.body;
      }
    );
    it('holder should accept connection offer from relying party', async function() {
      this.timeout(60000);
      const res = await agent
        .post('/connections')
        .auth(holder.username, holder.password)
        .set(bothHeaders)
        .send({wallet: holder.wallet.id, connectionOffer: connectionOffer})
        .expect(200);
      expect(res.body).to.have.all.keys('myDid', 'theirDid');
      holderRPDid = res.body.myDid;
    });
    it('relying party should create proof request', async function() {
      this.timeout(60000);
      const res = await agent
        .post('/proofs/requests')
        .auth(rp.username, rp.password)
        .set(bothHeaders)
        .send({
          wallet: rp.wallet.id,
          recipientDid: holderRPDid,
          proofRequest: {
            name: 'Ticket',
            version: '0.1',
            requested_attributes: {
              attr1_referent: {
                name: 'firstname',
                restrictions: [{cred_def_id: `${credDefId}`}],
              },
              attr2_referent: {
                name: 'lastname',
                restrictions: [{cred_def_id: `${credDefId}`}],
              },
              attr3_referent: {
                name: 'phone',
              },
            },
            requested_predicates: {
              // FIXME predicates do not work at the moment, add me back in or add another test
              //  'predicate1_referent': {
              //    'name': 'yearOfBirth',
              //    'p_type': '<',
              //    'p_value': 2000,
              //    'restrictions': [{'cred_def_id': credDefId}],
              //  },
            },
          },
        })
        .expect(201);
      expect(res.body).to.have.property('encryptedProofRequest');
      proofRequest = res.body.encryptedProofRequest;
    });
    it('holder should accept proof request and create proof', async function() {
      this.timeout(60000);
      const res = await agent
        .post('/proofs')
        .auth(holder.username, holder.password)
        .set(bothHeaders)
        .send({
          wallet: holder.wallet.id,
          encryptedProofRequest: proofRequest,
          selfAttestedAttributes: {
            phone: '11110000',
          },
        })
        .expect(201);
      expect(res.body).to.have.property('encryptedProof');
      proof = res.body.encryptedProof;
    });
    it('relying party should create proof verification', async function() {
      this.timeout(60000);
      const res = await agent
        .post('/proofs/verifications')
        .auth(rp.username, rp.password)
        .set(bothHeaders)
        .send({
          wallet: rp.wallet.id,
          encryptedProof: proof,
        })
        .expect(200);
      expect(res.body).to.have.property('isValid');
      expect(res.body.isValid).to.be.true;
    });
  });

  after(async function() {
    // clean up
    this.timeout(60000);
    valuesToDelete.reverse();
    for (const v of valuesToDelete) {
      await agent
        .delete(`/${v.path}/${v.id}`)
        .auth(...v.auth)
        .set(acceptHeader);
    }
  });
});
