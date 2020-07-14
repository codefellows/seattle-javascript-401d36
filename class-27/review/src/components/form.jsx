import React from 'react';

// const initialState = {
//   method: '',
//   url: '',
// }

class Form extends React.Component {
  constructor() {
    super();
    // our component managed state
    this.state = {
      method: '',
      url: '',
    }
  }

  handleButton = (e, value) => {
    e.preventDefault();
    this.setState({ method: value });
  }

  handleInput = (e) => {
    let url = e.target.value;
    this.setState({ url });
  }

  // return our JSX
  render() {
    return (
      <section>
        <form>
          <input value={this.state.url} onChange={this.handleInput} />
          <button type="submit">GO!</button>

          <ul>
            <li>
              <button onClick={(e) => this.handleButton(e, 'GET')}>GET</button>
            </li>
            <li>
              <button onClick={(e) => this.handleButton(e, 'PUT')}>PUT</button>
            </li>
            <li>
              <button onClick={(e) => this.handleButton(e, 'POST')}>POST</button>
            </li>
            <li>
              <button onClick={(e) => this.handleButton(e, 'DELETE')}>DELETE</button>
            </li>
          </ul>

        </form>
        <p>{this.state.method}&nbsp;{this.state.url}</p>
      </section>
    );
  }
}

export default Form;