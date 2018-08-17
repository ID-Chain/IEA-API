'use strict';
const wrap = require('../asyncwrap').wrap;
const services = require('../services');

exports.get = () =>
    wrap(async (req, res, next) => {
        const wh = req.wallet.handle;
        const theirDid = req.params.theirDid;

        let pairwise = await services.pairwise.get(wh, theirDid);
        next(new APIResult(200, pairwise));
    });

exports.getAll = () =>
    wrap(async (req, res, next) => {
        const wh = req.wallet.handle;
        console.log('Inside');
        let relationships = await services.pairwise.getAll(wh);
        next(new APIResult(200, relationships));
    });

exports.pushAttribute = () =>
    wrap(async (req, res, next) => {
        const wh = req.wallet.handle;
        const theirDid = req.body.theirDid;
        const attribute = req.body.attribute;
        const value = req.body.value;

        await services.pairwise.pushAttribute(wh, theirDid, attribute, value);
        next(new APIResult(200, { message: 'Success' }));
    });
