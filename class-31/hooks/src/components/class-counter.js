import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number = props.number,
      name = props.name,
    }
  }

  changeNumber = (number) => {
    this.setState({ number });
  }

  changeName = (name) => {
    this.setState({ name });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.changeNumber(this.state.number + 1)}>+</button>
        <p >{number}</p>
        <button onClick={() => this.changeNumber(this.state.number - 1)}>-</button>
      </div>
    )
  }
}

export default Counter;