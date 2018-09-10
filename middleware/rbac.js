/**
 * IDChain Agent REST API
 * Role Base Access Control Middleware
 */
'use strict';

const wrap = require('../asyncwrap').wrap;
const log = require('./../log').log;
const APIResult = require('../api-result');
const Permission = require('../models/permissions');
const Role = require('../models/role');

const methods = {
    '/api/indy': {
        POST: Permission.AGENT_ENDPOINT
    },

    '/api/login': {
        POST: Permission.LOGIN
    },

    '/api/message': {
        GET: Permission.GET_LIST_MESSAGES,
        POST: Permission.SEND_MESSAGE
    },

    '/api/credential': {
        GET: Permission.LIST_ALL_CREDENTIALS_OF_SPECIFIC_WALLET,
        POST: Permission.CREATE_A_CREDENTIAL_DEFINITION
    },

    '/api/credentialissue': {
        POST: Permission.ISSUE_CREDENTIAL
    },

    '/api/credentialdef': {
        GET: Permission.LIST_CREDENTIAL_DEFINITIONS_OF_WALLET,
        POST: Permission.CREATE_A_CREDENTIAL_DEFINITION
    },

    '/api/credentialoffer': {
        POST: Permission.CREATE_A_CREDENTIAL_OFFER
    },

    '/api/credentialrequest': {
        POST: Permission.ACCEPT_CREDENTIAL_OFFER_AND_CREATE_CREDENTIAL_REQUEST
    },

    '/api/connectionoffer': {
        POST: Permission.CREATE_A_CREDENTIAL_OFFER
    },

    '/api/connection': {
        POST: Permission.ACCEPT_A_CONNECTION_OFFER
    },

    '/api/proofrequest': {
        POST: Permission.CREATE_A_PROOF_REQUEST
    },

    '/api/proof': {
        POST: Permission.CREATE_A_PROOF
    },

    '/api/proofverification': {
        POST: Permission.CREATE_A_PROOF_VERIFICATION
    },

    '/api/schema': {
        GET: Permission.LIST_SCHEMAS,
        POST: Permission.CREATE_A_SCHEMA
    },

    '/api/user': {
        POST: Permission.REGISTER_A_NEW_USER,
        GET: Permission.RETRIEVE_A_USER,
        PUT: Permission.UPDATE_A_USER,
        DELETE: Permission.DELETE_A_USER
    },

    '/api/wallet': {
        GET: Permission.LIST_ALL_WALLETS_OF_USER,
        POST: Permission.CREATE_A_NEW_WALLET,
        DELETE: Permission.DELETE_A_WALLET
    },

    '/api/transactions': {
        GET: Permission.GET_LEDGER_TRANSACTIONS
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

function checkPublicPermissions(permission) {
    const publicPermissions = require('../models/permissions').allPermissions;
    const permissions = Object.values(publicPermissions);
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
    const isPublicPermission = checkPublicPermissions(permission);

    log.info(`isPublicPermission ${isPublicPermission}`);
    log.info(`hasRolePermission ${hasRolePermission}`);
    log.info(`hasDirectPermission ${hasDirectPermission}`);

    const valid = hasRolePermission || hasDirectPermission || isPublicPermission;
    if (!valid) {
        next(APIResult.unauthorizedRequest());
    } else {
        next();
    }
}

module.exports = wrap(middleware);
