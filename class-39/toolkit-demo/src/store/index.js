// import { createStore, combineReducers, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

// still need reducers and actions, here we jump into this file and initizize
import products from './products-slice.js';

let rootReducer = combineReducers({ products });

const store = configureStore({ reducer: rootReducer });

export default store;
