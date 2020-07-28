/** 
 * Products
 * @component products
 */



import React from 'react';

// Let's us opt-in to our store.
import { connect } from 'react-redux';
import { Paper } from '@material-ui/core';


// we need some actions that can be run against our reducer
import { changeCategory } from '../../store/categories.js';
import { filter } from '../../store/products.js';

class Products extends React.Component {
  render() {
    console.log('props from Products', this.props)

    return (
      <Paper elevation={2} elementType="div">
        {this.props.products.map(product => <Paper elementType="section">{product.name}</Paper>)}
        <Paper elementType="section">Section 1</Paper>
        <Paper elementType="section">Section 2</Paper>
        <Paper elementType="section">Section 3</Paper>
      </Paper>
    )
  }
}

// tell our connect function to add to our component props to whatever we need from the redux store / state
const mapStateToProps = state => {
  console.log('state from mapStateToProps in products', state);
  return {
    products: state.products,
  }
}

const mapDispatchToProps = { changeCategory, filter };

export default connect(
  mapStateToProps,
  // {changeCategory, filter}
  mapDispatchToProps
)(Products);
