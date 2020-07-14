import React from 'react';

//Create a header. Display title text.
//Create an input. Changes title text.

class Title extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'Insert Title'
    }
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleSubmitTitle = this.handleSubmitTitle.bind(this);
  };

  handleChangeTitle(event) {

    this.setState({ title: event.target.value })
  }

  handleSubmitTitle(event) {
    event.preventDefault();
  }

  render() {
    return (
      <section>
        <h1>
          {this.state.title}
        </h1>
        <br></br>
        <form onSubmit={this.handleSubmitTitle}>
          <input type="text" placeholder="New Title?" value={this.state.title} onChange={this.handleChangeTitle} />
          <input type="submit" value="Change" />
        </form>
      </section>
    );
  }
}

export default Title;