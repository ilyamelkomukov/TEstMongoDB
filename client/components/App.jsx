const React = require('React'),
  TEst = require('./TEst.jsx');

// create app for TEst

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <TEst/>
      </div>
    );
  }
}

module.exports = App;
