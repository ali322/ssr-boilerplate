
module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: [
    'standard',
    "plugin:react/recommended"
  ],
  plugins: [
    'promise'
  ],
  'rules': {
    'arrow-parens': 'off',
    'generator-star-spacing': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-function-paren': 'off',
    'new-cap': 'off',
    "react/jsx-uses-react": "error",
    'space-before-function-paren': 'off',
    'promise/always-return': 'off',
    'promise/no-return-wrap': 'off',
    'promise/no-callback-in-promise': 'off',
    'promise/catch-or-return': 'off',
    'promise/avoid-new': 'off'
  }
}