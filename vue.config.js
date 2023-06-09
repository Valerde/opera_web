const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const name = 'PornHub'

module.exports = {
  productionSourceMap: false,
  // options...
  devServer: {
    port: 8000,
    proxy: {
      '/api': {
        target: 'http://192.168.37.131:8080',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }

    }
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
}
