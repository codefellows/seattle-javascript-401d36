import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import messages from './message.js';

let reducers = combineReducers({ messages });

export default createStore(reducers, composeWithDevTools());