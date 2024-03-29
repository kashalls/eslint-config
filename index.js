/**
 * Copyright (c) 2019-2021 Kashall
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

module.exports = {
    root: true,
    "extends": "eslint:recommended",
    "env": {
        "node": true,
        "es6": true
    },
    "parserOptions": {
        "ecmaVersion": 2021
    },
    "rules": {
        "no-extra-parens": ["warn", "all", {
            "nestedBinaryExpressions": false
        }],
        "valid-jsdoc": ["warn", {
            "requireReturn": false,
            "requireReturnDescription": false,
            "prefer": {
                "arg": "param",
                "argument": "param",
                "prop": "property",
                "constructor": "class",
                "augments": "extends",
                "fires": "emits",
                "var": "member",
                "yield": "yields",
                "return": "returns",
                "exception": "throws",
                "virtual": "abstract"
            },
            "preferType": {
                "String": "string",
                "Number": "number",
                "Boolean": "boolean",
                "Symbol": "symbol",
                "function": "Function",
                "object": "Object",
                "date": "Date",
                "error": "Error"
            }
        }],

        "accessor-pairs": "warn",
        "array-callback-return": "error",
        "complexity": "warn",
        "consistent-return": "error",
        "curly": ["error", "multi-line", "consistent"],
        "dot-location": ["error", "property"],
        "dot-notation": "error",
        "eqeqeq": "error",
        "no-console": ["error", {
            "allow": ["log", "warn", "error"]
        }],
        "no-empty-function": "error",
        "no-floating-decimal": "error",
        "no-implied-eval": "error",
        "no-invalid-this": "error",
        "no-lone-blocks": "error",
        "no-multi-spaces": "error",
        "no-new-func": "error",
        "no-new-wrappers": "error",
        "no-new": "error",
        "no-octal-escape": "error",
        "no-return-assign": "error",
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-unmodified-loop-condition": "error",
        "no-unused-expressions": "error",
        "no-useless-call": "error",
        "no-useless-concat": "error",
        "no-useless-escape": "error",
        "no-void": "error",
        "no-warning-comments": "warn",
        "wrap-iife": "error",
        "yoda": "error",

        "no-label-var": "error",
        "no-shadow": "error",
        "no-undef-init": "error",

        "callback-return": "error",
        "handle-callback-err": "error",
        "no-mixed-requires": "error",
        "no-new-require": "error",
        "no-path-concat": "error",
        "no-process-env": "error",

        "array-bracket-spacing": "error",
        "block-spacing": "error",
        "brace-style": ["error", "1tbs", {
            "allowSingleLine": true
        }],
        "camelcase": "error",
        "comma-dangle": "error",
        "comma-spacing": "error",
        "comma-style": "error",
        "computed-property-spacing": "error",
        "consistent-this": "error",
        "eol-last": "error",
        "func-names": "error",
        "func-style": ["error", "declaration", {
            "allowArrowFunctions": true
        }],
        "id-length": ["error", {
            "exceptions": ["i", "j", "a", "b"]
        }],
        "indent": ["error", "tab", {
            "SwitchCase": 1
        }],
        "key-spacing": "error",
        "keyword-spacing": ["error", {
            "overrides": {
                "if": {
                    "after": true
                },
                "for": {
                    "after": true
                },
                "while": {
                    "after": true
                },
                "catch": {
                    "after": true
                },
                "switch": {
                    "after": true
                }
            }
        }],
        "max-depth": "error",
        "max-len": ["error", 200, 2],
        "max-nested-callbacks": ["error", {
            "max": 4
        }],
        "max-statements-per-line": ["error", {
            "max": 2
        }],
        "new-cap": "error",
        "newline-per-chained-call": ["error", {
            "ignoreChainWithDepth": 6
        }],
        "no-array-constructor": "error",
        "no-bitwise": "warn",
        "no-inline-comments": "error",
        "no-lonely-if": "error",
        "no-mixed-operators": "error",
        "no-multiple-empty-lines": ["error", {
            "max": 2,
            "maxEOF": 1,
            "maxBOF": 0
        }],
        "no-new-object": "error",
        "no-spaced-func": "error",
        "no-trailing-spaces": "error",
        "no-unneeded-ternary": ["error", {
            "defaultAssignment": false
        }],
        "no-whitespace-before-property": "error",
        "object-curly-newline": "error",
        "object-curly-spacing": ["error", "always"],
        "operator-assignment": "error",
        "operator-linebreak": ["error", "after"],
        "padded-blocks": ["error", {
            "classes": "always",
            "blocks": "never",
            "switches": "never"
        }],
        "quote-props": ["error", "as-needed"],
        "quotes": ["error", "single", {
            "avoidEscape": true,
            "allowTemplateLiterals": true
        }],
        "semi-spacing": "error",
        "semi": "error",
        "space-before-blocks": "error",
        "space-before-function-paren": ["error", {
            "anonymous": "always",
            "named": "never",
            "asyncArrow": "always"
        }],
        "space-in-parens": "error",
        "space-infix-ops": "error",
        "space-unary-ops": "error",
        "spaced-comment": "error",
        "unicode-bom": "error",

        "arrow-body-style": "error",
        "arrow-spacing": "error",
        "no-duplicate-imports": "error",
        "no-useless-computed-key": "error",
        "no-useless-constructor": "error",
        "prefer-arrow-callback": "error",
        "prefer-const": "error",
        "prefer-destructuring": ["error", {
            "VariableDeclarator": {
                "array": false,
                "object": true
            },
            "AssignmentExpression": {
                "array": true,
                "object": true
            }
        }, {
            "enforceForRenamedProperties": false
        }],
        "prefer-rest-params": "error",
        "prefer-spread": "error",
        "prefer-template": "error",
        "rest-spread-spacing": "error",
        "template-curly-spacing": "error",
        "yield-star-spacing": "error"
    }
}