//const Schema = require('../models/highlevelschema');
//const indy = require('indy-sdk');
const request = require('request');
const HSchema = require('../models/highlevelschema');
const wrap = require('../asyncwrap').wrap;
//const pool = require('../pool');
const APIResult = require('../api-result');

module.exports = {
    create: wrap(async (req, res, next) => {
      request
      .get({url: 'http://172.16.0.201:9000/checkCompileSchema',qs:req.body})
      .on('response', function(response) {
          var body = '';
          response.on('data', function(chunk) { body += chunk;});
          response.on('end', function() {
            var lowSchemas = JSON.parse(body);
            // for loop
            let hschema = await new HSchema({
              name : "mplo",
              version: "0.1",
              data: { "hello": 3}
            });
            hschema.save();

          });
      })
      .pipe(res);
    }),

    update: wrap(async (req, res, next) => {
      
      next(new APIResult(200, {}));
    }),


    retrieve: wrap(async (req, res, next) => {

    }),

    list: wrap(async (req, res, next) => {
        // const s = await Schema.find({}).exec();
        next(new APIResult(200, {}));
    })


};
