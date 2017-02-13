const React = require('react'),
  UserList = require('UserList');

// create app for TEst

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <UserList/>
      </div>
    );
  }
}

module.exports = App;
