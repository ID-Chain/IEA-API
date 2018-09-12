//const Schema = require('../models/highlevelschema');
//const indy = require('indy-sdk');
const request = require('request');

const wrap = require('../asyncwrap').wrap;
//const pool = require('../pool');
const APIResult = require('../api-result');

module.exports = {
    create: wrap(async (req, res, next) => {

    }),

    update: wrap(async (req, res, next) => {

    }),


    retrieve: wrap(async (req, res, next) => {

    }),

    list: wrap(async (req, res, next) => {
        // const s = await Schema.find({}).exec();
        next(new APIResult(200, {}));
    })


};
