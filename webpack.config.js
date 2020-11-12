const path = require('path');

const title = path.join(__dirname, '/client/src/title_app.jsx');
const specs = path.join(__dirname, '/client/src/specs_app.jsx');
const description = path.join(__dirname, '/client/src/description_app.jsx');
const dist = path.join(__dirname, '/client/dist');
const node = path.join(__dirname, 'node_modules');

module.exports = {
  entry: {
    title,
    description,
    specs,
  },
  output: {
    filename: '[name].js',
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
