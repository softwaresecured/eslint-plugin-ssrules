/**
 * @fileoverview Checks for the use of bad hashing algorithms that have been shown to collide
 * @author Jeremy Buis
 */
'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

var rule = require('../../../lib/rules/detect-bad-hash-algorithms');

var RuleTester = require('eslint').RuleTester;

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run('detect-bad-hash-algorithms', rule, {

    valid: [

        // give me some code that won't trigger a warning
        {
            code: 'crypto.createHash(\'sha3-224\').update(data).digest(\'hex\')',
            errors: [{
                message: 'Fill me in.',
                type: 'Me too'
            }]
        },

        {
            code: 'crypto.createHash(\'sha3-256\')',
            errors: [{
                message: 'Fill me in.',
                type: 'Me too'
            }]
        },

        {
            code: 'require(\'crypto\').createHash(\'sha3-384\')',
            errors: [{
                message: 'Fill me in.',
                type: 'Me too'
            }]
        }
    ],

    invalid: [
        {
            code: 'crypto.createHash(\'md5\').update(data).digest(\'hex\')',
            errors: [{
                message: 'MD5 is a weak hash algorithm with collisions.',
                type: 'CallExpression'
            }]
        },
        {
            code: 'crypto.createHash(\'sha1\').update(data).digest(\'hex\')',
            errors: [{
                message: 'SHA1 is a weak hash algorithm with collisions.',
                type: 'CallExpression'
            }]
        },

        {
            code: 'require(\'crypto\').createHash(\'sha1\').update(data).digest(\'hex\')',
            errors: [{
                message: 'SHA1 is a weak hash algorithm with collisions.',
                type: 'CallExpression'
            }]
        },

        {
            code: 'crypto.createHash(\'sha1\')',
            errors: [{
                message: 'SHA1 is a weak hash algorithm with collisions.',
                type: 'CallExpression'
            }]
        }
    ]
});
