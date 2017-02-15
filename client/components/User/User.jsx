const React = require('react'),
  api = require('api');

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    let userId = this.props.params.userId;
    api.getUser(userId).then((res) => {
      var newUser = res.data[0];
      console.dir(newUser);
      this.setState({
        user: newUser
      });
    });
  }

  render() {
    return(
      <div>
        <div>This is user: {this.state.user.name}</div>
      </div>
    );
  }
}

module.exports = User;
