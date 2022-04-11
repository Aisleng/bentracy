module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'airbnb',
    'prettier',
    'plugin:react/jsx-runtime',
  ],
  settings: {
    'import/resolver': {
      'eslint-import-resolver-custom-alias': {
        alias: {
          '@components': './src/components',
          '@components/*': './src/components/*',
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      node: {
        moduleDirectory: ['node_modules', 'src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    jest: {
      verbose: true,
    },
  },
  plugins: ['eslint-plugin-react-hooks', 'eslint-plugin-import', 'jest', 'prettier', 'react'],
  env: {
    browser: true,
    jest: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './jsconfig.json',
    jsconfigRootDir: './',
  },
  ignorePatterns: ['/.git', '/.yarn', '/benchmark/**/dist', '/src/lib/MigrationComponents/**/*'],
  rules: {
    'import/no-unresolved': 0,
    'react/no-unescaped-entities': 0,
    'react/jsx-props-no-spreading': [1, { html: 'enforce', custom: 'ignore' }],
    'react/jsx-uses-react': 0,
    'react/react-in-jsx-scope': 0,
  },
};
