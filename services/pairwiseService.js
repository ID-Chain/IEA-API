'use strict';
const indy = require('indy-sdk');

exports.get = async function(wh, theirDid) {
    return await indy.getPairwise(wh, theirDid);
};

exports.getAll = async function(wh) {
    let relationships = await indy.listPairwise(wh);
    console.log(relationships);
    for (let relationship of relationships) {
        relationship.metadata = JSON.parse(relationship.metadata);
        if (!relationship.metadata.name) {
            relationship.metadata.name = `Endpoint DID: ${relationship.metadata.theirEndpointDid}`;
        }
    }
    return relationships;
};

exports.getMyDid = async function(wh, theirDid) {
    let pairwise = await indy.getPairwise(wh, theirDid);
    return pairwise.my_did;
};

exports.getAttr = async function(wh, theirDid, attr) {
    let pairwise = await indy.getPairwise(wh, theirDid);
    return JSON.parse(pairwise.metadata)[attr];
};

exports.addProof = async function(wh, theirDid, proof, proofRequest) {
    let pairwise = await exports.get(theirDid);
    let metadata = JSON.parse(pairwise.metadata);
    if (!metadata.proofs) {
        metadata.proofs = [];
    }
    proof.request = proofRequest;
    metadata.proofs.push(proof);

    metadata = setAttr('name', metadata, proof, proofRequest);

    await indy.setPairwiseMetadata(wh, theirDid, JSON.stringify(metadata));
};

exports.pushAttribute = async function(wh, theirDid, attribute, value) {
    let pairwise = await exports.get(theirDid);
    let metadata = JSON.parse(pairwise.metadata);
    if (!metadata[attribute]) {
        metadata[attribute] = [];
    }
    metadata[attribute].push(value);
    await indy.setPairwiseMetadata(wh, theirDid, JSON.stringify(metadata));
};

// This will overwrite the old attribute if one exists.
function setAttr(attr, metadata, proof, proofRequest) {
    for (let key of Object.keys(proofRequest.requested_attributes)) {
        if (proofRequest.requested_attributes[key].name === attr) {
            metadata[attr] = proof['requested_proof']['revealed_attrs'][key]['raw'];
        }
    }
    return metadata;
}
