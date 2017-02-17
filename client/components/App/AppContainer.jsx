const React = require('react'),
  App = require('./App.jsx');

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <App >
        {this.props.children}
      </App>
    );
  }
}

module.exports = AppContainer;
