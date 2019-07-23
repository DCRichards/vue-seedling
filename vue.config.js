const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  lintOnSave: 'default',

  devServer: {
    clientLogLevel: 'warning',
  },

  configureWebpack: {
    plugins: [
      new StylelintPlugin({
        emitErrors: true,
        files: '**/*.(vue|scss|css|html)',
        fix: true,
      }),
    ],
  },
};
