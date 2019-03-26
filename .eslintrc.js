/**
 * IDF ESLint config
 * It's extended version of the world-lead airbnb config
 * @link https://github.com/airbnb/javascript
 * @see /node_modules/eslint-config-airbnb-base/rules
 *
 * Please add comments whenever you add/overwrite a rule
 *
 * Available rules
 * @link http://eslint.org/docs/rules/ (use http://eslint.org/docs/rules/RULE_NAME URL for rule description)
 *
 * Disabling Rules with Inline Comments
 * http://eslint.org/docs/user-guide/configuring#disabling-rules-with-inline-comments
 *
 * @link https://github.com/InteractionDesignFoundation/IDF-web/blob/develop/docs/code/frontend/coding-guide.md
 */

/**
 * To disable inspection of all the rules for a block use:
 */
/*eslint-disable */
/*eslint-enable */

/**
 * To disable specified rule(s) for one line, use this syntax (rules can be comma-separated):
 */
// eslint-disable-line no-invalid-this
// eslint-disable-next-line no-unused-vars

const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
    root: true,
    extends: ['eslint:recommended', 'prettier'],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        allowImportExportEverywhere: true,
    },
    env: {
        es6: true,
        browser: true,
        node: false,
    },
    globals: {
        WP_APP_ENV: false,
    },
    plugins: [
        'jquery', // Disallow jQuery functions with native equivalents
        'jsdoc', // enforcing all FUNCTIONS should have jsdoc.
        'compat', // Lint browser compatibility of APIs used @see https://github.com/amilajack/eslint-plugin-compat
        'prettier', // Prettier is an opinionated code formatter.
    ],
    settings: {
        polyfills: [
            // https://github.com/amilajack/eslint-plugin-compat/wiki/Adding-polyfills
            'promises',
            'fetch',
            'url',
        ],
        jsdoc: {
            allowOverrideWithoutParam: true,
        },
    },
    rules: {
        'prettier/prettier': ERROR,
        'compat/compat': ERROR, // Lint browser compatibility of APIs used
        'max-depth': [ERROR, { max: 3 }], // prevent deep nesting or callback hell
        'no-var': [ERROR], // aimed at discouraging the use of var and encouraging the use of const or let instead
        camelcase: [ERROR, { properties: 'never' }],
        quotes: [ERROR, 'single', { avoidEscape: true, allowTemplateLiterals: true }], // prefer single quotes for best readability
        semi: ERROR,

        // It prevent you from accidental assignment in an if or while condition, but still allows assignment if you explicitly wrap it in parentheses
        'no-cond-assign': [ERROR, 'except-parens'],
        // omit explicit radixes
        radix: OFF,
        // allow param-reassign to init omitted params
        'no-param-reassign': OFF,
        // [temp]
        'vars-on-top': OFF,
        'func-names': [OFF, 'never'],
        // http://eslint.org/docs/rules/eqeqeq#always
        eqeqeq: [WARN, 'smart'],
        strict: OFF,
        'wrap-iife': [WARN, 'any'],
        'no-unused-vars': [ERROR, { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
        'import/no-amd': OFF,
        'global-require': ERROR,
        alert: OFF,
        'no-console': [ERROR, { allow: ['warn'] }],
        // Under the strict mode, this keywords outside of classes or class-like objects might be undefined and raise a TypeError.
        'no-invalid-this': ERROR,

        'valid-jsdoc': [
            ERROR,
            {
                // This rule enforces valid and consistent JSDoc comments: http://eslint.org/docs/rules/valid-jsdoc
                prefer: {
                    return: 'returns',
                    arg: 'param',
                    argument: 'param',
                },
                requireReturn: false,
                requireReturnType: true,
                requireReturnDescription: false,
                requireParamDescription: false,
            },
        ],
        'require-jsdoc': [
            WARN,
            {
                // @see http://eslint.org/docs/rules/require-jsdoc
                require: {
                    FunctionDeclaration: true,
                    MethodDefinition: true,
                    ClassDeclaration: false,
                    ArrowFunctionExpression: false,
                },
            },
        ],
        'newline-per-chained-call': OFF,
        'no-plusplus': [ERROR, { allowForLoopAfterthoughts: true }], // Because the unary ++ and -- operators are subject to automatic semicolon insertion, differences in whitespace can change semantics of source code.

        /**
         * ESLint plugin with rules that help validate proper imports.
         * @see https://github.com/benmosher/eslint-plugin-import
         */
        // Forbid the import of external modules that are not declared in the package.json's dependencies, devDependencies, optionalDependencies or peerDependencies.
        'import/no-extraneous-dependencies': [OFF],
        // Allow use arrays as first parameter of require method @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
        'import/no-dynamic-require': [OFF],

        /**
         * JSDoc linting rules for ESLint.
         * @see https://www.npmjs.com/package/eslint-plugin-jsdoc
         */
        // Ensures that parameter names in JSDoc match those in the function declaration.
        'jsdoc/check-param-names': ERROR,
        // Reports invalid block tag names.
        'jsdoc/check-tag-names': ERROR,
        // Reports invalid types.
        'jsdoc/check-types': ERROR,
        // Enforces a consistent padding of the block description.
        'jsdoc/newline-after-description': OFF,
        // Requires that block description and tag description are written in complete sentences
        'jsdoc/require-description-complete-sentence': OFF,
        // Requires a hyphen before the @param description.
        // 'jsdoc/require-hyphen-before-param-description': WARN,
        // Requires that all function parameters are documented.
        'jsdoc/require-param': ERROR,
        // Requires that @param tag has description value.
        // 'jsdoc/require-param-description': WARN,
        // Requires that @param tag has type value.
        'jsdoc/require-param-type': ERROR,
        // Require-returns-description.
        // 'jsdoc/require-returns-description': WARN,
        // Requires that @returns tag has type value.
        'jsdoc/require-returns-type': ERROR,
        'jsdoc/no-undefined-types': ERROR,
        'jsdoc/require-example': OFF,
        'jsdoc/require-hyphen-before-param-description': OFF,
        'jsdoc/require-param-description': OFF,
        'jsdoc/require-param-name': ERROR,
        'jsdoc/require-returns-description': OFF,
        'jsdoc/valid-types': ERROR,

        'jquery/no-ajax': ERROR,
        'jquery/no-ajax-events': ERROR,
        // "jquery/no-animate": ERROR, // 6
        // "jquery/no-attr": ERROR, // 104
        'jquery/no-bind': ERROR,
        // "jquery/no-class": ERROR, // 176
        // "jquery/no-clone": ERROR, // 2 places!
        // "jquery/no-closest": ERROR, // 34
        // "jquery/no-css": ERROR, // 21
        // "jquery/no-data": ERROR, // 135
        'jquery/no-deferred': ERROR,
        'jquery/no-delegate': ERROR,
        // "jquery/no-each": ERROR, // 14
        // "jquery/no-fade": ERROR, // 3
        // "jquery/no-filter": ERROR, // 3
        // "jquery/no-find": ERROR, // 252
        'jquery/no-global-eval': ERROR,
        'jquery/no-has': ERROR,
        // "jquery/no-hide": ERROR, // 31
        // "jquery/no-html": ERROR, // 34
        'jquery/no-in-array': ERROR,
        // "jquery/no-is": ERROR, // 7
        'jquery/no-load': ERROR,
        // "jquery/no-map": ERROR, // 2
        'jquery/no-merge': ERROR,
        'jquery/no-param': ERROR,
        // "jquery/no-parent": ERROR, // 14
        // "jquery/no-parents": ERROR, // 14
        'jquery/no-parse-html': ERROR,
        // "jquery/no-prop": ERROR, // 15
        'jquery/no-proxy': ERROR,
        'jquery/no-ready': ERROR,
        // "jquery/no-serialize": ERROR, // 26
        // "jquery/no-show": ERROR, // 29
        'jquery/no-size': ERROR,
        // "jquery/no-sizzle": ERROR, // 8
        // "jquery/no-slide": ERROR, // 8
        // "jquery/no-submit": ERROR, // 8
        // "jquery/no-text": ERROR, // 41
        // "jquery/no-toggle": ERROR, // 2
        // "jquery/no-trigger": ERROR, // 10
        'jquery/no-trim': ERROR,
        // "jquery/no-val": ERROR, // 76
        'jquery/no-when': ERROR,
        'jquery/no-wrap': ERROR,
    },
};
