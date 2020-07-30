import React from 'react';
import { connect } from 'react-redux';

// import productsSlice, { fetchProducts } from '../store/products-slice.js';
// const { update, set} = peopleSlice.actions;
import { fetchProducts, update, set } from '../store/products-slice.js';

class List extends React.Component {

  componentWillMount() {
    this.props.fetchProducts();
  }

  render() {

    console.log(this.props);

    return (
      <h1>List!!!</h1>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}
const mapDispatchToProps = { fetchProducts, update, set };

export default connect(mapStateToProps, mapDispatchToProps)(List);
