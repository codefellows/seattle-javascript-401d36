import React from 'react';

import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Categories from './components/storefront/categories.js';
import Products from './components/storefront/products.js';

// Setting up our global state!
import { Provider } from 'react-redux';

import store from './store';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <Header />
          <Categories />
          <Products />
          <Footer />
        </Provider>
      </>
    )
  }
}