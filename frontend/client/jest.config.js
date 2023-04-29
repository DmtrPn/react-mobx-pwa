module.exports = {
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.tsx?$': ['ts-jest', {
            diagnostics: true,
            tsconfig: 'tsconfig.json',
        }],
    },
    testRegex: '((\\.|/)(unit.ts|unit.js|spec.js|spec.ts))$',
    rootDir: 'src',
    moduleDirectories: ['node_modules', 'src'],
    moduleFileExtensions: ['ts', 'js', 'tsx'],
    testTimeout: 50000,
    moduleNameMapper: {
        '.+\\.(css|scss)$': 'identity-obj-proxy',
        '^@core/(.*)': '<rootDir>/core/$1',
        '^@components/(.*)': '<rootDir>/components/$1',
        '^@store/(.*)': '<rootDir>/store/$1',
        '^@store': '<rootDir>/store/index.ts',
        '^@api/(.*)': '<rootDir>/api/$1',
        '^@modules/(.*)': '<rootDir>/modules/$1',
        '^@dream/(.*)': '<rootDir>/modules/dream/$1',
        '^@common/(.*)': '<rootDir>/modules/common/$1',
        '^@utils/(.*)': '<rootDir>/utils/$1',
    },
    setupFilesAfterEnv: ['@jest-decorated/core/globals'],
};
