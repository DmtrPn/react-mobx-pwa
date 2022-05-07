// https://eslint.org/docs/rules
// https://typescript-eslint.io/rules
module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: './tsconfig.json',
    },
    extends: [
        'airbnb-typescript/base',
    ],
    rules: {
        "indent": "off",
        '@typescript-eslint/indent': [
            'error',
            4,
            {
                SwitchCase: 1,
                FunctionExpression: {
                    parameters: 0,
                },
            }
        ],
        'react/jsx-filename-extension': 0,
        'import/extensions': 0,
        'import/no-extraneous-dependencies': 0,
        '@typescript-eslint/lines-between-class-members': [
            "error",
            "always",
            { "exceptAfterSingleLine": true }
        ],
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                ignoreRestSiblings: true,
                argsIgnorePattern: '_',
            }],
    }
}
