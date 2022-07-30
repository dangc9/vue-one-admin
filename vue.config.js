const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: "./",
  lintOnSave: true,
  transpileDependencies: true,
  devServer: {
    client: {
        overlay: {
        warnings: false,
        errors: true
      },
    },
    setupMiddlewares: require('./mock/mock-server.js')
  },
})
