// https://eslint.org/docs/rules
// https://typescript-eslint.io/rules
module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    ignorePatterns: '*.scss.d.ts',
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: './tsconfig.json',
    },
    extends: [
        'eslint-config-airbnb-typescript',
    ],
    rules: {
        '@typescript-eslint/indent': ['error', 4],
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
