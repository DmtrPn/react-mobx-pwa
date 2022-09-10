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
        'indent': 'off',
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
        'no-multiple-empty-lines': [
            'error',
            {
                max: 1,
                maxBOF: 0,
                maxEOF: 0,
            }
        ],
        'lines-between-class-members': 'off',
        '@typescript-eslint/lines-between-class-members': [
            'error',
            'always',
            {
                exceptAfterSingleLine: true,
                // exceptAfterOverload: true
            },
        ],
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                ignoreRestSiblings: true,
                argsIgnorePattern: '_',
            }],
        '@typescript-eslint/member-ordering': [
            'error',
            {
                default: [
                    'public-static-field',
                    'protected-static-field',
                    'private-static-field',
                    'public-static-method',
                    'protected-static-method',
                    'private-static-method',
                    'public-instance-field',
                    'protected-instance-field',
                    'private-instance-field',
                    'public-constructor',
                    'protected-constructor',
                    'private-constructor',
                    'public-set',
                    'public-get',
                    'public-instance-method',
                    'protected-set',
                    'protected-get',
                    'protected-instance-method',
                    'private-set',
                    'private-get',
                    'private-instance-method'
                ],
            },
        ],
    }
}
