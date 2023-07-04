const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        "styles": path.join(__dirname, "src/assets/styles")
      }
    }
  },
  //Paths 是 webpack提供
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080/mock',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
})
