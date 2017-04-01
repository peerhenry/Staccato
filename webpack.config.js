var webpack = require('webpack');
var path = require('path');

module.exports = {

  context: __dirname,
  entry: './demo_src/main',

  output: {
    path: path.resolve(__dirname, 'demo'),
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['.webpack.js', '.web.js', '.js', '.jsx'],
    alias: {
    }
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },

  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },

  devServer: {
    contentBase: './demo/',
    inline: true
  }
}