// bring in functions to do the actual work
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// Bringing the busniness logic for our store.
import { categoryReducer } from './categories.js';
import products from './products.js';


// Combine our busniess logic into something that redux can use.
let reducers = combineReducers({ categoryReducer, products });
// this creates a thing that can manage global state
let store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}

export default store();