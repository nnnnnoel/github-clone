/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const DotEnv = require('dotenv-webpack');

module.exports = {
  entry: {
    vendor: ['react', 'react-dom'],
    app: path.resolve(__dirname, 'index.js'),
  },
  devServer: {
    port: 8080,
    historyApiFallback: true,
  },
  watch: true,
  output: {
    path: '/',
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].chunk.js',
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'awesome-typescript-loader',
          query: {
            presets: ['es2015', 'react'],
          },
        },
      },
      {
        test: /\.s?[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new DotEnv(),
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
};
