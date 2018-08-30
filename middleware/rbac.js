/**
 * IDChain Agent REST API
 * Role Base Access Control Middleware
 */
'use strict';

const wrap = require('../asyncwrap').wrap;
const log = require('./../log').log;
const APIResult = require('../api-result');
const permissions = require('../models/permissions');
const Role = require('../models/role');

const api = permissions.API_PERMISSIONS;

const methods = {
    '/api/indy': {
        POST: api.AGENT_ENDPOINT
    },

    '/api/login': {
        POST: api.LOGIN
    },

    '/api/message': {
        GET: api.GET_LIST_MESSAGES,
        POST: api.SEND_MESSAGE
    },

    '/api/credential': {
        GET: api.LIST_ALL_CREDENTIALS_OF_SPECIFIC_WALLET,
        POST: api.CREATE_A_CREDENTIAL_DEFINITION
    },

    '/api/credentialissue': {
        POST: api.ISSUE_CREDENTIAL
    },

    '/api/credentialdef': {
        GET: api.LIST_CREDENTIAL_DEFINITIONS_OF_WALLET,
        POST: api.CREATE_A_CREDENTIAL_DEFINITION
    },

    '/api/credentialoffer': {
        POST: api.CREATE_A_CREDENTIAL_OFFER
    },

    '/api/credentialrequest': {
        POST: api.ACCEPT_CREDENTIAL_OFFER_AND_CREATE_CREDENTIAL_REQUEST
    },

    '/api/connectionoffer': {
        POST: api.CREATE_A_CREDENTIAL_OFFER
    },

    '/api/connection': {
        POST: api.ACCEPT_A_CONNECTION_OFFER
    },

    '/api/proofrequest': {
        POST: api.CREATE_A_PROOF_REQUEST
    },

    '/api/proof': {
        POST: api.CREATE_A_PROOF
    },

    '/api/proofverification': {
        POST: api.CREATE_A_PROOF_VERIFICATION
    },

    '/api/schema': {
        GET: api.LIST_SCHEMAS,
        POST: api.CREATE_A_SCHEMA
    },

    '/api/user': {
        POST: api.REGISTER_A_NEW_USER,
        GET: api.RETRIEVE_A_USER,
        PUT: api.UPDATE_A_USER,
        DELETE: api.DELETE_A_USER
    },

    '/api/wallet': {
        GET: api.LIST_ALL_WALLETS_OF_USER,
        POST: api.CREATE_A_NEW_WALLET,
        DELETE: api.DELETE_A_WALLET
    },

    '/api/transactions': {
        GET: api.GET_LEDGER_TRANSACTIONS
    }
};

function getPermission(method, url) {
    let _method = methods[url];

    if (_method == null) return null;
    return _method[method];
}

async function checkRolesPermissions(roleName, permission) {
    const role = await Role.findOne({ title: roleName });
    if (role == null) {
        return false;
    }

    const permissions = role.permissions;
    return permissions.indexOf(permission) !== -1;
}

function checkUserPermissions(permissions, permission) {
    if (permissions == null) {
        return false;
    }

    return permissions.indexOf(permission) !== -1;
}

/**
 * Role Based Access Control Middleware
 * Checks if user has access to executed method
 * @param {object} req expressjs object
 * @param {object} res expressjs object
 * @param {function} next expressjs callback function
 */
async function middleware(req, res, next) {
    const url = req.originalUrl;
    const user = req.user;

    log.info(`url ${url} method ${req.method}`);
    log.info(`user ${user.username}`);

    const permission = getPermission(req.method, url);
    if (permission == null) {
        log.info(`no permission for ${req.method} ${url} `);
        return next();
    }

    const role = user.role;
    const permissions = user.permissions;

    const hasRolePermission = await checkRolesPermissions(role, permission);
    const hasDirectPermission = checkUserPermissions(permissions, permission);

    log.info(`hasRolePermission ${hasRolePermission}`);
    log.info(`hasDirectPermission ${hasDirectPermission}`);

    const valid = hasRolePermission || hasDirectPermission;
    if (!valid) {
        next(APIResult.unauthorizedRequest());
    } else {
        next();
    }
}

module.exports = wrap(middleware);
