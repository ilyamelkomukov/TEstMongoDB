const React = require('react'),
  api = require('../api/index.js');

class TEst extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: {}
    };
  }

  componentWillMount() {
    let newState = {};

    api.listUsers()
      .then((res) => {
        newState = res;
        this.setState({
          users: newState
        });
      })
      .catch((err) => {
        console.log(err);
      });

  }

  render() {
    return(
      <div>
        {this.state.users}
      </div>
    );
  }
}

module.exports = TEst;
