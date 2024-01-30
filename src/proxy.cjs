const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use(
  '/',
  createProxyMiddleware({
    target: 'https://cloud.appwrite.io',
    changeOrigin: true,
    pathRewrite: {
      '^/v1': '/v1', // adjust the path as needed
    },
  })
);

const PORT = 5174;
app.listen(PORT, () => {
  console.log(`Proxy server listening on port ${PORT}`);
});
