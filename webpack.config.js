const path = require('path');
require('dotenv').config();

const config = {
  entry: './src/plots/index.js',
  output: {
    filename: `${process.env.NAME}-bundle.js`,
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: process.env.NAME,
      filename: 'index.html',
      template: 'src/plots/index.ejs',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
};

module.exports = () => config;
