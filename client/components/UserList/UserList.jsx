const React = require('react'),
  api = require('api'),
  User = require('User'),
  {Link} = require('react-router');

class UserList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    let users;

    if (this.props.users.length) {
      users = this.props.users.map((user, index) => {
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
          onClick={this.props.handleListUsers}>
          List users
        </button>
        {usersList}
      </div>
    );
  }
}

module.exports = UserList;
