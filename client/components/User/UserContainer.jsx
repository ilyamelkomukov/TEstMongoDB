const React = require('react'),
  User = require('./User.jsx'),
  api = require('api');

class UserContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    api.getUser(this.props.params.userId)
      .then((res) => {
        let newUser = res.data[0];
        this.setState({
          user: newUser
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <User
        user = {this.state.user}
      />
    );
  }
}

module.exports = UserContainer;
