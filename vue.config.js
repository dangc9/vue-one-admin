module.exports = {
  publicPath: "/one-admin/",
  lintOnSave: true,
  transpileDependencies: [
    '@vue/devtools-api',
    'pinia',
    'sockjs-client'
  ],
  devServer: {
    overlay: {
      warnings: false,
      errors: true
    },
    before: require('./mock/mock-server.js')
  },
}