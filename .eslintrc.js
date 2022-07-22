module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
   // 自定义eslint规则
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': 0,
    'vue/multi-word-component-names': 0,
    'vue/html-self-closing': ['error',{
      'html': {
        'void': 'never',
        'normal': 'any',
        'component': 'any'
      },
      'svg': 'always',
      'math': 'always'
    }],
    'comma-dangle': [2, 'never'],
    'no-trailing-spaces': 2,
    'semi': 0,
    'indent': [2, 2, {
      'SwitchCase': 1
    }],
  },
}
