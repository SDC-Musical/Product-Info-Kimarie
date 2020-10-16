const path = require('path');

const src = path.join(__dirname, '/client/src');
const dist = path.join(__dirname, '/client/dist');
const node = path.join(__dirname, 'node_modules');

module.exports = {
  entry: `${src}/index.jsx`,
  output: {
    filename: 'bundle-product-information-service.js',
    path: dist,
  },
  resolve: {
    modules: [node, 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react',
            '@babel/preset-env'],
        },

      },
    ],
  },
};
