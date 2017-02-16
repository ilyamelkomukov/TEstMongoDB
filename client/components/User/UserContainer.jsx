const React = require('react'),
  User = require('./User.jsx');

class UserContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <User />
    );
  }
}

module.exports = UserContainer;
