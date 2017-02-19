const React = require('react'),
  reactRedux = require('react-redux'),
  UserList = require('./UserList.jsx'),
  api = require('api'),
  store = require('store');

class UserListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.onListUsers = this.onListUsers.bind(this);
  }

  onListUsers() {
    api.getUsers();
  }

  render() {
    return (
      <UserList
        users = {this.props.users}
        handleListUsers = {this.onListUsers.bind(null)}
      />
    );
  }
}

const mapStateToProps = function(store) {
  return {
    users: store.userState.users
  };
};

module.exports = reactRedux.connect(mapStateToProps)(UserListContainer);
