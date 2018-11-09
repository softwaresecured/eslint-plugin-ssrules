/**
 * @fileoverview Checks for the use of bad hashing algorithms that have been shown to collide
 * @author Jeremy Buis
 */
'use strict';

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: 'Checks for the use of bad hashing algorithms that have been shown to collide',
            category: 'Security',
            recommended: false
        },
        fixable: null, // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function (context) {

        // bad hash algorithms
        const hashMap = {
            'md2': 'MD2',
            'md4': 'MD4',
            'md5': 'MD5',
            'sha1': 'SHA1',
            'sha224': 'SHA224',
            'sha256': 'SHA256',
            'sha384': 'SHA384',
            'sha512': 'SHA512'
        };

        /**
         * Checks to see if a MemberExpression"s node is `createHash` or
         * `crypto.createHash`.
         * @param {ASTNode} calleeNode The callee node to evaluate.
         * @returns {boolean} True if the callee is `createHash` or `crypto.createHash`,
         * false otherwise.
         */
        function isCreateHash (node) {
            return (
                node.type === 'MemberExpression' &&
                !node.computed &&
                node.property.type === 'Identifier' &&
                node.property.name === 'createHash'
            );
        }

        // ----------------------------------------------------------------------
        // Public
        // ----------------------------------------------------------------------

        return {

            'CallExpression': function (node) {

                const hashName = (node.arguments[0]) ? hashMap[node.arguments[0].value] : undefined;

                if (isCreateHash(node.callee) &&
                    hashName &&
                    node.arguments[0].type === 'Literal' &&
                    hashMap[node.arguments[0].value]
                ) {

                    context.report({
                        'node': node,
                        'message': '{{hashName}} is a weak hash algorithm with collisions.',
                        'data': {
                            'hashName': hashName
                        },
                        'fix': function() {
                            return null;
                        }
                    });
                }
            }
        };
    }
};
