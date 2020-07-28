import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import authReducer from './auth/reducer.js';
import voteReducer from './votes/reducer.js';

let reducers = combineReducers({ auth: authReducer, votes: voteReducer });

const store = () => {
    return createStore(reducers, composeWithDevTools())
}

export default store();
