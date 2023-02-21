module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: 'standard-with-typescript',
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json']
  },
  plugins: ['@typescript-eslint'],
  rules: {
    semi: ['off', 'always'],
    '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }]
  }
}
