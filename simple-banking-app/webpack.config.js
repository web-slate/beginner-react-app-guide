const webpack = require('webpack');
const path = require('path');

// WebPack Plugins.
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: [/node_modules/],
        use: ['babel-loader']
      },
    ]
  },
  resolve: {
    extensions: ['*', '.js'],
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'simple-banking-app.js',
    chunkFilename: '[name].js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),

    // Take Reference of HTML File.
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, 'static/index.html'),
    }),
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './static',
    hot: true,
  }
};