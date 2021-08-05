module.exports = {
  extends: 'eslint-config-lighthouselabs',

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },

  rules: {
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    semi: off
  }
}
