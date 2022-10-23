const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: ['./src/index.js', './src/styles/index.scss'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        type: 'asset/resource',
        generator: {
          filename: 'style.css',
        },
        use: ['sass-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [new ESLintPlugin()],
};
