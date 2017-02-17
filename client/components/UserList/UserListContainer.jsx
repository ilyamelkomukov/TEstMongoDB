const React = require('react'),
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
    api.getUsers()
      .then((res) => {
        let newUsers = res.data;
        this.setState({
          users: newUsers
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <UserList
        users = {this.state.users}
        handleListUsers = {this.onListUsers.bind(null)}
      />
    );
  }
}

module.exports = UserListContainer;
