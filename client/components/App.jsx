const React = require('react'),
  UserList = require('UserList'),
  {Link} = require('react-router');

// create app for TEst

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        This is main view of the TEst mongoDB app
        <nav>
          <ul>
            <li>
              <Link
                to='/'>
                Home
              </Link>
            </li>
            <li>
              <Link
                to='/users'>
                Users
              </Link>
            </li>
          </ul>
        </nav>
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}

module.exports = App;
