const path = require("path");

const resolve = dir => path.join(__dirname, dir);

const BASE_URL = process.env.NODE_ENV === "production" ? "/ivew-admin" : "/";

module.exports = {
  publicPath: BASE_URL,
  lintOnSave: false,
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("_c", resolve("src/components"));
  },
  // 打包时不生成.map文件
  productionSourceMap: false,
  // 开发跨域配置
  devServer: {
    proxy: "http://localhost:4000"
  }
};
