import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { // state only for the form
      currentWord: 'current words',
    }; // handlers invoked with the state, must be bound to the component
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // separating the onChange handler allows us to be more dynamic with JSX
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  // having the submit handler as a dedicated method reduces possible interference from preventDefault.
  handleSubmit(event) {
    console.log('URL submitted to form', this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <section id="form">
        <form onSubmit={this.handleSubmit}>
          <input id="view" className="submit" value="GO!"></input>
          <input id="test" className="button" type="button" value="Update Word" onClick={() => this.setState({ currentWord: 'test' })}></input>
          <input className="button" type="button" value="Update Word" onClick={() => this.setState({ currentWord: 'at' })}></input>
          <input className="button" type="button" value="Update Word" onClick={() => this.setState({ currentWord: 'me' })}></input>
        </form>
        <p id="word">{this.state.currentWord}</p>
      </section>
    );
  }
}

export default Form;