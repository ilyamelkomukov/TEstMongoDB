const React = require('react'),
  api = require('../api/index.js');

class TEst extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentWillMount() {
    let newUsers = [];

    api.getUsers()
      .then((res) => {
        newUsers = res;
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
    /*
    if (this.state.users.length != 0) {
      users = this.state.users.map((user, index) => {
        return(
          <div key={index}>
            {user.uesrId} {user.name}
          </div>
        );
      });
    } else {
      users = 'No users';
    }
    */


    return(
      <div>
        {this.state.users}
      </div>
    );
  }
}

module.exports = TEst;
