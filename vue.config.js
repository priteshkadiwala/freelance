module.exports = {
  chainWebpack: (config) => {
    config.module.rules.delete('eslint');
  },
  // local Laravel server address for api proxy
  devServer: { proxy: 'http://localhost:8000' },

  // outputDir should be Laravel public dir
  outputDir: '../public/',
  publicPath: '/',

  // for production we use blade template file
  indexPath: process.env.NODE_ENV === 'production'
    ? '../resources/views/app.blade.php'
    : 'index.html',
};
