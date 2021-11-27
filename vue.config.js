module.exports = {
  devServer: {
    proxy: {
      // 配置多个跨域
      '^/api': {
        target: 'http://152.136.185.210:5000', //跨域接口的地址
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
