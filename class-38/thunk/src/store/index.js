import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
// import thunk from './middlewares/thunk.js';
import candidates from './candidates/reducer.js';

let reducers = combineReducers({ candidates });

export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));