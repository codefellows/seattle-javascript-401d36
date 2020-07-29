import React from 'react';
import { connect } from 'react-redux';

import { fetchCandidates } from '../store/candidates/actions.js';

class List extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  componentWillMount() {
    this.props.fetchCandidates();
  }

  render() {
    return <h1>List!!!</h1>
  }
}

// const List = (props) => {
//   return <h1>List component</h1>
// }

const mapStateToProps = state => {
  return {
    candidate: state.candidates,
  }
}

const mapDispatchToProps = { fetchCandidates };

export default connect(mapStateToProps, mapDispatchToProps)(List);