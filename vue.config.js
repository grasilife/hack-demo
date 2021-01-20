"use strict";

const path = require("path");
module.exports = {
  publicPath: "/",
  outputDir: "dist",
  lintOnSave: true,
  devServer: {
    open: true,
    host: "0.0.0.0",
    port: 3001,
    https: false,
    hotOnly: false,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      "/rest": {
        target: "http://0.0.0.0",
        changeOrigin: true,
        pathRewrite: {
          "^/rest": ""
        }
        // cookiePathRewrite: {
        //   "/iov/subject": "/"
        // },
        // cookieDomainRewrite: {}
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias.set("@", path.join(__dirname, "src"));
    config.module
      .rule("images")
      .test(/\.(png|jpe?g|JPG|gif|svg|avif|webp)(\?.*)?$/)
      .use("url-loader")
      .loader("url-loader");
  },
  productionSourceMap: false
};
