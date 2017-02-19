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

      api: path.resolve(__dirname, './client/api/index.js'),
      App: path.resolve(__dirname, './client/components/App/AppContainer.jsx'),
      Home: path.resolve(__dirname, './client/components/Home/HomeContainer.jsx'),
      UserList: path.resolve(__dirname, './client/components/UserList/UserListContainer.jsx'),
      User: path.resolve(__dirname, './client/components/User/UserContainer.jsx'),
      Router: path.resolve(__dirname, './client/components/Router.jsx'),
      actionTypes: path.resolve(__dirname, './client/actions/actionTypes.js'),
      userActions: path.resolve(__dirname, './client/actions/userActions.js'),
      reducers: path.resolve(__dirname, './client/reducers/reducers.js'),
      store: path.resolve(__dirname, './client/store.js')
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
