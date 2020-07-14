import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    };
  }

  handleClick = (e) => {
    e.preventDefault();
    let newCount = this.state.count + 1;
    this.setState({ count: newCount });
  }

  handleClear = (e) => {
    e.preventDefault();
    this.setState({ count: 0 });
  }

  render() {
    return (
      <div>
        <form>
          <button id="increment" onClick={this.handleClick}>
            Add +1
          </button>
        </form>
        <p>
          {this.state.count};
        </p>
        <button onClick={this.handleClear}>
          Clear
          </button>
      </div>
    )
  }
}

export default Counter;