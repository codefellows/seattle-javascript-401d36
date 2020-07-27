import React from 'react';
import { connect } from 'react-redux';

import { increment, reset } from './store/votes';

const Counter = (props) => {

  // const { votes, increment } = props;

  return (
    <section>
      <ul>
        {props.votes.candidates.map(person => (
          <li onClick={() => props.increment(person.name)}>{person.name} : {person.votes}</li>
        ))}
        <button onClick={props.reset}>Reset</button>
      </ul>
    </section>
  )
}

// makes sure our global state is added to our regular props values
const mapStateToProps = state => {
  return {
    votes: state.votes,
  }
}
const mapDispatchToProps = { increment, reset };

// running a function ( connect() ) which returns another function "higher order component"
// const higherOrder = connect(mapStateToProps, mapDispatchToProps);
// export default higherOrder(Counter);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);