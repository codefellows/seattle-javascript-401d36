import React from 'react';

import prettyPrintJSON from 'pretty-print-json';

class Form extends React.Component {

  constructor() {
    super()
    this.state = {
      method: 'GET',
      url: '',
      headers: '',
      data: ''
    }
  }

  // method to set URL and method in application state
  // dynamically chooses 
  handleInput = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value }, () => console.log(this.state));
  }

  // do the RESTing
  handleSubmit = async (e) => {
    e.preventDefault();

    let restOptions = {
      method: this.state.method,
    }

    let response = await fetch(this.state.url, restOptions);
    let prettyHeaders = prettyPrintJSON.toHtml(response.headers);
    let data = await response.json();
    let prettyData = prettyPrintJSON.toHtml(data);
    this.setState({
      // headers: JSON.stringify(response.header, null, 2),
      // data: JSON.stringify(data, null, 2)
      headers: prettyHeaders,
      data: prettyData,
    }, () => console.log(this.state));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="url" type="text" value={this.state.url} onChange={this.handleInput} placeholder="URL" />
        <button type="submit">Go!</button>
        <button name="method" value="GET" onClick={this.handleInput}>GET</button>
        <button name="method" value="POST" onClick={this.handleInput}>POST</button>
        <button name="method" value="PUT" onClick={this.handleInput}>PUT</button>
        <button name="method" value="DELETE" onClick={this.handleInput}>DELETE</button>
        <pre dangerouslySetInnerHTML={{ __html: this.state.headers }} />
        <pre dangerouslySetInnerHTML={{ __html: this.state.data }} />
      </form >
    );
  }
}

export default Form;
