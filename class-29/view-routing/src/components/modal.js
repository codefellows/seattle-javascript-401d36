import React from 'react';

import If from './if.js';

class Modal extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: false,
    }
  }

  toggle = (e) => {
    e.preventDefault();
    this.setState({ visible: !this.state.visible });
  }

  render() {
    return (
      <div id="modal-container">
        <If condition={this.state.visible}>
          {this.props.children}
          <button onClick={this.toggle}>Hide Contents</button>
        </If>
        <If condition={!this.state.visible}>
          <button onClick={this.toggle}>Show Contents</button>
        </If>
      </div>
    )
  }
}

export default Modal;