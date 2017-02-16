const React = require('react'),
  Home = require('./Home.jsx');

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Home />
    );
  }
}

module.exports = HomeContainer;
