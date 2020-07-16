import React from 'react';

class ChatInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: 'Group 1',
      text: '',
    };
    this.handleAuthor = this.handleAuthor.bind(this);
    this.handleText = this.handleText.bind(this);
    this.handlePayload = this.handlePayload.bind(this);
  }


  handleText(event) {
    event.preventDefault();
    this.setState({ text: event.target.value });
  }

  handleAuthor(event) {
    event.preventDefault();
    this.setState({ author: event.target.value });
  }

  async handlePayload(event) {
    event.preventDefault();

    console.log(this.state);
    // let author = this.state.author;
    // let text = this.state.text;
    // let date = new Date().toDateString();

    let payload = {
      author: this.state.author,
      text: this.state.text,
      date: new Date().toDateString(),
    };
    let data = {};
    let postData = {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    };
    data = await fetch(this.props.url, postData);
    // adding response handling (esoteric to fetch)
    data = await data.json();

    this.props.handler(data); // or postData
  }


  render() {
    return (
      <div>
        <form>
          <input type='text' value={this.state.text} placeholder="Message" onChange={this.handleText} />
          <input type="text" value={this.state.author} placeholder="Author" onChange={this.handleAuthor} />
          <input type="button" value="GO!" onClick={this.handlePayload} />
        </form>
      </div>
    );
  }
}

export default ChatInput;