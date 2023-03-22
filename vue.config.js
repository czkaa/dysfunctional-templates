module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/dysfunctional-templates/" : "/",
  configureWebpack: {
    plugins: [
      require('unplugin-vue-components/webpack')({ /* options */ }),
    ],
  },
};