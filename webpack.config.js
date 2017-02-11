const webpack = require('webpack'),
  path = require('path');

module.exports = {
  entry: {
    bundle: path.resolve(__dirname, './client/main.js')
  },
  output: {
    path: path.resolve(__dirname, './public/build/'),
    filename: "[name].js"
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      App: path.resolve(__dirname, './client/components/App.jsx')
    }
  },

  devtool: 'source-map',
  watch: true,

  module: {
    rules: [
      {
        test: /\.jsx$|\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        exclude: [path.resolve(__dirname, './node_modules')]
      }
    ]
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      minChunks: 2
    })
  ]
};
