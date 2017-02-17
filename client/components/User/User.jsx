const React = require('react'),
  api = require('api');

class User extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return(
      <div>
        <div>This is user: {this.props.user.name} with id: {this.props.user.userId}</div>
      </div>
    );
  }
}

module.exports = User;
