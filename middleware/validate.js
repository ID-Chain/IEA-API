/**
 * IDChain Agent REST API
 * Validation Middleware
 */
'use strict';

const YAML = require('yamljs');
const ajv = require('ajv')({removeAdditional: true});
const wrap = require('../asyncwrap').wrap;
const APIResult = require('../api-result');
const swaggerDoc = YAML.load('./swagger.yaml');

ajv.addSchema(swaggerDoc, 'swagger.json');

/**
 * Validation Middleware
 * Checks if a schema with ref '#/definitions/path_method exists
 * and applies it if it does
 * @param {object} req expressjs object
 * @param {object} res expressjs object
 * @param {function} next expressjs callback function
 */
async function middleware(req, res, next) {
  if (typeof req.swagger !== 'object') next();
  const vName = getDefinitionName(req.swagger.pathName, req.method);
  const validate = vName
    ? ajv.getSchema(`swagger.json#/definitions/${vName}`)
    : null;
  const valid = validate ? validate(req.body) : true;
  if (!valid) {
    next(new APIResult(400, {message: ajv.errorsText(validate.errors)}));
  } else {
    next();
  }
}

/**
 * Get definition name as described in Swagger file
 * @param {string} pathName
 * @param {string} method
 * @return {string} definition name
 */
function getDefinitionName(pathName, method) {
  const rx = /(?!_)\w.+?(?=({))(?!_)/;
  const slash = new RegExp('/', 'gi');
  const tmp = pathName.replace(slash, '_') + '_{';
  const match = rx.exec(tmp);
  let definition = null;
  if (match) {
    definition = match[0];
    definition += `${method.toLowerCase()}`;
  }
  return definition;
}

module.exports = wrap(middleware);
