const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = app => {
  app.use(
    createProxyMiddleware('/code-test/202212',{
        target: 'http://en.seegenepr.com',
        changeOrigin: true
      }
    )
  )
}