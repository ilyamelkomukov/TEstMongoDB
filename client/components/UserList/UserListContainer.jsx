const React = require('react'),
  UserList = require('./UserList.jsx'),
  api = require('api');

// TODO: End with containers and views

class UserListContainer {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

  listUsers() {

  }

  render() {
    return (
      <UserList />
    );
  }
}
