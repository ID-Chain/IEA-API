/**
 * IDChain Agent REST API
 * API Tests
 * Tests /user
 */
'use strict';

const mocha = require('mocha');
const expect = require('chai').expect;

const core = require('./0-test-core');
const vars = require('./0-test-vars');
const describe = mocha.describe;
const it = mocha.it;

const agent = vars.agent;
const acceptHeader = vars.acceptHeader;
const bothHeaders = vars.bothHeaders;

let valuesToDelete = [];
let token = '';

describe('/api/user', function() {
    let tmpUser = { username: 'willDelete', password: 'afterThis' };

    beforeEach(async function() {
        const id = await core.createUser(tmpUser);
        valuesToDelete.push({ id: id, auth: [tmpUser.username, tmpUser.password], path: 'user' });

        const res = await core.login(tmpUser);

        token = res.body.token;
        bothHeaders.Authorization = token;
    });

    after(async function() {
        await core.cleanUp();
    });

    it('POST / should return 400 on missing parameter', async function() {
        await agent
            .post('/api/user')
            .set(bothHeaders)
            .send({ username: 'something' })
            .expect(400);
    });

    it('GET /:id should retrieve specific user', async function() {
        const res = await agent
            .get(`/api/user/${tmpUser.id}`)
            .set(bothHeaders)
            .expect(200);
        expect(res.body).to.eql({
            id: tmpUser.id,
            username: tmpUser.username
        });
    });

    it('GET /me should retrieve current user', async function() {
        const res = await agent
            .get('/api/user/me')
            .set(bothHeaders)
            .expect(200);
        expect(res.body).to.eql({
            id: tmpUser.id,
            username: tmpUser.username
        });
    });

    it('GET /otheruser should return 404', async function() {
        await agent
            .get('/api/user/otheruser')
            .set(bothHeaders)
            .expect(404);
    });

    it('PUT /:id should update specific user', async function() {
        await agent
            .put(`/api/user/${tmpUser.id}`)
            .set(bothHeaders)
            .send({ username: 'newName', password: 'newPass' })
            .expect(200);
        const res2 = await agent
            .get(`/api/user/${tmpUser.id}`)
            .auth('newName', 'newPass')
            .set(bothHeaders)
            .expect(200);
        expect(res2.body).to.eql({ id: tmpUser.id, username: 'newName' });
        tmpUser.username = res2.body.username;
        tmpUser.password = 'newPass';
    });

    it('PUT /me with only username should succeed', async function() {
        await agent
            .put(`/api/user/${tmpUser.id}`)
            .set(bothHeaders)
            .send({ username: 'willDelete' })
            .expect(200);
        const res2 = await agent
            .get(`/api/user/${tmpUser.id}`)
            .auth('willDelete', tmpUser.password)
            .set(bothHeaders)
            .expect(200);
        expect(res2.body).to.eql({ id: tmpUser.id, username: 'willDelete' });
        tmpUser.username = res2.body.username;
    });

    it('DELETE /user/:id should delete specific user', async function() {
        await agent
            .delete(`/api/user/${tmpUser.id}`)
            .set(bothHeaders)
            .expect(204);
        valuesToDelete = valuesToDelete.filter(v => v.id !== tmpUser.id);
    });
});
