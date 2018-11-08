/**
 * @fileoverview Checks for the use of bad hashing algorithms that have been shown to collide
 * @author Jeremy Buis
 */
'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

var rule = require('../../../lib/rules/bad-hash-algorithm');

var RuleTester = require('eslint').RuleTester;

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run('bad-hash-algorithm', rule, {

    valid: [

        // give me some code that won't trigger a warning
        {
            code: 'crypto.createHash(\'sha512\').update(data).digest(\'hex\')',
            errors: [{
                message: 'Fill me in.',
                type: 'Me too'
            }]
        },

        {
            code: 'crypto.createHash(\'sha256\').update(data).digest(\'hex\')',
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
        }
    ]
});
