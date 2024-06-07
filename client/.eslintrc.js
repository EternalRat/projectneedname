module.exports = {
    root: true,
    // extends: "@react-native-community",
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    plugins: [
        'react',
        '@typescript-eslint',
        'unused-imports',
        'simple-import-sort',
    ],
    ignorePatterns: ['.*rc.js', '**/*.config.js'],
    env: {
        node: true,
        browser: true,
        es2021: true,
        jest: true,
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    globals: {
        NodeJS: true,
        React: true,
        JSX: true,
    },
    rules: {
        'no-console': ['error', { allow: ['warn', 'error', 'info', 'log'] }],
        'no-unused-vars': 'off',
        'no-var': 'error',
        'no-prototype-builtins': 'off',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
            'warn',
            {
                vars: 'all',
                varsIgnorePattern: '^_',
                args: 'after-used',
                argsIgnorePattern: '^_',
            },
        ],
        'no-redeclare': 'off',
        indent: 'off',
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'react/react-in-jsx-scope': 'off',
    },
    parserOptions: {
        project: ['./tsconfig.json'],
    },
};
