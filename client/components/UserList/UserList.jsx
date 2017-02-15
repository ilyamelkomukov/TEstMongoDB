const React = require('react'),
  api = require('api'),
  User = require('User'),
  {Link} = require('react-router');

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
            <Link
              to={`/users/${user.userId}`}>
              {user.name}
            </Link>
          </div>
        );
      });
    } else {
      users = 'No users';
    }

    let usersList = (<ul>
      {users}
    </ul>);

    return(
      <div>
        <button
          ref='button'
          onClick={this.listUsers}>
          List users
        </button>
        {usersList}
      </div>
    );
  }
}

module.exports = UserList;
