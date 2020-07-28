// Redux magic!
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// reducers, just a function ( which will be used to set intitial State)
import categories from './categories.js';
import products from './products.js';

// create reducer logic to feed to our store.
let reducers = combineReducers({ categories, products });

let store = () => {
  // tons of magic here.  This makes our store consumable by something???
  return createStore(reducers, composeWithDevTools());
}

export default store();