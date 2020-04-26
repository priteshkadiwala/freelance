module.exports = {
  publicPath: '/freelance/',
  chainWebpack: (config) => {
    config.module.rules.delete('eslint');
  },
};
