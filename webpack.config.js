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

      // TODO: Create files, paths and folders for containers and views, after - redux
      // Don`t rebuild before completed it

      api: path.resolve(__dirname, './client/api/index.js'),
      App: path.resolve(__dirname, './client/components/App/AppContainer.jsx'),
      Home: path.resolve(__dirname, './client/components/Home/HomeContainer.jsx'),
      UserList: path.resolve(__dirname, './client/components/UserList/UserListContainer.jsx'),
      User: path.resolve(__dirname, './client/components/User/UserContainer.jsx'),
      Router: path.resolve(__dirname, './client/components/Router.jsx')
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
