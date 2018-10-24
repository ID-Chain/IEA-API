/**
 * IDChain Agent REST API
 * Proof Request Controller
 */
'use strict';

const lib = require('../../lib');
const log = require('../../log').log;
const Mongoose = require('../../db');
const APIResult = require('../../api-result');

const Message = Mongoose.model('Message');
const messageTypes = lib.message.messageTypes;

module.exports = {
    /**
     * List proof requests belonging to wallet (sent or received)
     * @param {Wallet} wallet
     * @return {Promise<Message[]>}
     */
    async list(wallet) {
        return Message.find({
            wallet: wallet.id,
            type: messageTypes.PROOFREQUEST
        }).exec();
    },

    /**
     * Create and send a proof request
     * @param {Wallet} wallet
     * @param {string} recipientDid
     * @param {(string | object)} proofRequest _id of proof request template or proof request object
     * @param {string} [proofCallback] callback URL to HTTP POST with proof and verification
     * @return {Promise<Message>}
     */
    async create(wallet, recipientDid, proofRequest, proofCallback) {
        if (typeof proofRequest === 'string') {
            // TODO retrieve proof request template
            throw APIResult.create(501, 'proof request templates are not yet implemented');
        }
        if (!proofRequest) {
            throw APIResult.badRequest('invalid proof request or no applicable proof request template found');
        }
        if (!(await lib.sdk.isPairwiseExists(wallet.handle, recipientDid))) {
            throw APIResult.badRequest('invalid recipientDid, no pairwise exists');
        }
        const message = await lib.proof.createProofRequest(wallet.handle, recipientDid, proofRequest);
        const meta = proofCallback ? { proofCallback: proofCallback } : {};
        const doc = await Message.store(
            wallet.id,
            message.message.nonce,
            messageTypes.PROOFREQUEST,
            wallet.ownDid,
            recipientDid,
            message,
            meta
        );
        await lib.message.sendAuthcryptMessage(wallet.handle, recipientDid, message);

        return doc;
    },

    /**
     * Retrieve a proof request
     * @param {Wallet} wallet
     * @param {String} id request _id (not message.id or nonce)
     * @return {Promise<Message>}
     */
    async retrieve(wallet, id) {
        return Message.findTypeById(wallet, id, messageTypes.PROOFREQUEST).exec();
    },

    /**
     * Remove a proof request
     * @param {Wallet} wallet
     * @param {String} id request _id (not message.id or nonce)
     * @return {Promise<Message>}
     */
    async remove(wallet, id) {
        const request = await module.exports.retrieve(wallet, id);
        if (request) {
            await request.remove();
        }
        return request;
    },

    /**
     * Handle reception of proof request through agent to agent communication
     * @param {Wallet} wallet
     * @param {object} message
     */
    async handle(wallet, message) {
        log.debug('received proof request');
        const innerMessage = await lib.message.authdecryptMessage(wallet.handle, message.origin, message.message);
        message.message = innerMessage;

        // TODO validation

        // request is valid so store it
        await Message.store(wallet.id, message.message.nonce, message.type, message.origin, wallet.ownDid, message);
    }
};
