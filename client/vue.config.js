const { defineConfig } = require('@vue/cli-service')
const proxy = require('http-proxy-middleware')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: 'http://localhost:8000'
  }
})
