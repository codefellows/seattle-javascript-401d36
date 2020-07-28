import React from 'react';
import { connect } from 'react-redux';

import { List, ListItem, ListItemText } from '@material-ui/core';

import { increment, reset } from '../store/votes/actions.js';

const Counter = (props) => {
  console.log(props);

  const { votes, increment } = props;

  return (
    <List>
      {Object.keys(votes).map(person => {
        return (
          <ListItem key={person}>
            <ListItemText onClick={() => increment(person)}>{person} : Vote {votes[person]}</ListItemText>
          </ListItem>
        )
      })}
    </List>
  )
}

const mapStateToProps = (state) => {
  return {
    votes: state.votes,
  }
}

const mapDispatchToProps = { increment, reset };

export default connect(mapStateToProps, mapDispatchToProps)(Counter);