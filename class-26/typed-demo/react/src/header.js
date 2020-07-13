import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1
        onClick={() => this.props.handleState('state words')}
      >
        My First React Component {this.props.words}
      </h1>
    );
  }

}

export default Header;