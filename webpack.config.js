const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
require('dotenv').config();

const config = {
  entry: './src/plots/index.js',
  output: {
    filename: `${process.env.NAME}-bundle.js`,
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      name: process.env.NAME,
      filename: '../index.html',
      template: 'src/plots/index.ejs',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};

module.exports = () => config;
