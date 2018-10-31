/**
 * IDChain Agent REST API Routes
 * Proof Request Template Routes
 */
'use strict';

const router = require('express').Router();
const controller = require('../controllers/proof/index');
const wrap = require('../asyncwrap').wrap;
const APIResult = require('../api-result');

router
    .route('/')
    .get(
        wrap(async (req, res, next) => {
            const data = await controller.template.list(req.wallet);
            res.locals.result = APIResult.success(data);
            next();
        })
    )
    .post(
        wrap(async (req, res, next) => {
            const data = await controller.template.create(req.wallet, req.body.template);
            res.locals.result = APIResult.created(data);
            next();
        })
    );

router
    .route('/:proofRequestTemplateId')
    .get(
        wrap(async (req, res, next) => {
            const data = await controller.template.retrieve(req.wallet, req.params.proofRequestTemplateId);
            res.locals.result = data ? APIResult.success(data) : APIResult.notFound();
            next();
        })
    )
    .delete(
        wrap(async (req, res, next) => {
            const data = await controller.template.remove(req.wallet, req.params.proofRequestTemplateId);
            res.locals.result = data ? APIResult.noContent() : APIResult.notFound();
            next();
        })
    );

router.use(['/', '/:proofRequestTemplateId'], (req, res, next) => {
    // FIXME eventually we should move away from misusing the
    // error handler and instead pass results through res.locals
    if (res.locals.result) {
        next(res.locals.result);
    } else {
        next();
    }
});

module.exports = router;
