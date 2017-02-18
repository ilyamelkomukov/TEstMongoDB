const React = require('react'),
  reactRedux = require('react-redux');
  UserList = require('./UserList.jsx'),
  api = require('api');

class UserListContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };

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
    users: userState.users
  };
};

module.exports = reactRedux.connect(mapStateToProps)(UserListContainer);
