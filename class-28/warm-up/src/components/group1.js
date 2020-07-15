import React from "react";

class Words extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWord: "current words",
      rendered: false,
    };
    this.handleView = this.handleView.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ currentWord: event.target.value });
  }

  handleView(event) {
    event.preventDefault();
    this.setState({
      currentWord: "current words",
      rendered: true
    });
  }

  render() {
    return (
      <div className="Words">
        <form onSubmit={this.handleView}>
          <input id="view" type="button" value="View" onClick={this.handleView} />
          <br />
          <input
            id="test"
            type="button"
            value="test"
            onClick={this.handleChange}
          />
          <input
            id="test2"
            type="button"
            value="test2"
            onClick={this.handleChange}
          />
          <input
            id="test3"
            type="button"
            value="test3"
            onClick={this.handleChange}
          />
        </form>
        <section>
          <p id="word">{this.state.rendered ? this.state.currentWord : ''}</p>
        </section>
      </div>
    );
  }
}

export default Words;