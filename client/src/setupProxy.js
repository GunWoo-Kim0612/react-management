// const proxy = require('http-proxy-middleware');          이거 안돌아감...
const { createProxyMiddleware } = require('http-proxy-middleware');

// src/setupProxy.js
module.exports = function (app) {
    app.use(
        createProxyMiddleware('/api/customers', {
            target: 'http://127.0.0.1:55555/', // 비즈니스 서버 URL 설정
            changeOrigin: true
        })
    );
};