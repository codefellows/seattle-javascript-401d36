import React, { useEffect } from 'react';

// this is our library for connecting react components to a redux store
import { connect } from 'react-redux';
import { Paper, TextField, Box, Typography, List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';


import products, { update, fetchProducts } from '../store/products.js';

const Update = (props) => {
  console.log(props);

  useEffect(() => {

    props.fetchProducts();

  }, []); // this last thing is like a list of events

  return (
    <List>
      {props.products.map(product => {
        return (
          <ListItem key={product.name}>
            <ListItemText onClick={() => props.update(product.category)}>{product.name} </ListItemText>
          </ListItem>
        )
      })}

    </List>

  )
}

// something that attaches redux state, to our component props
const mapStateToProps = state => {
  // whatever is returned gets attached to props
  return state.products;
}

// const mapDispatchToProps = { update, fetchProducts };

// here is our connection function being used. ( using function currying )
//  it takes two things: a function to add redux state to props, a list of actions that redux can dispatch using our component props
export default connect(mapStateToProps, { update, fetchProducts })(Update);