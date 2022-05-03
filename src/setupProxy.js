const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    // Server api path
    "/board",
    createProxyMiddleware({
      // Server 주소
      target: "http://localhost:3030",
      changeOrigin: true,
    })
  );
};
