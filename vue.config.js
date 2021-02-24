module.exports = {
  transpileDependencies: [
    'vuex-module-decorators'
  ],
  chainWebpack: config => {
    config
    .plugin("html")
    .tap(args => {
      args[0].title = "WikiPerDay";
      return args;
    });
  }
}