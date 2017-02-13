const React = require('react'),
  api = require('../api/index.js');

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };

    this.listUsers = this.listUsers.bind(this);
  }

  componentWillMount() {
    // let newUsers = [];

    // api.getUsers()
    //   .then((res) => {
    //     newUsers = res.data;
    //     console.dir(newUsers);
    //     this.setState({
    //       users: newUsers
    //     });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

  }

  listUsers() {
    api.getUsers()
      .then((res) => {
        var newUsers = res.data;
        console.dir(newUsers);
        this.setState({
          users: newUsers
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {

    let users;

    if (this.state.users.length) {
      users = this.state.users.map((user, index) => {
        return(
          <div key={index}>
            {user.userId} {user.name} {user._id}
          </div>
        );
      });
    } else {
      users = 'No users';
    }



    return(
      <div>
        <button
          ref='button'
          onClick={this.listUsers}>
          List users
        </button>
        {users}
      </div>
    );
  }
}

module.exports = UserList;
