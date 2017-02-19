const React = require('react'),
  User = require('./User.jsx'),
  api = require('api'),
  ReactRedux = require('react-redux'),
  store = require('store');

class UserContainer extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    api.getUser(this.props.params.userId);
  }

  render() {
    return (
      <User
        user = {this.props.user}
      />
    );
  }
}

const mapStateToProps = function(store) {
  return {
    user: store.userState.user
  };
};

module.exports = ReactRedux.connect(mapStateToProps)(UserContainer);
