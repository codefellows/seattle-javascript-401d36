import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import authReducer from './auth/reducer.js';

let reducers = combineReducers({ auth: authReducer });

const store = () => {
    return createStore(reducers, composeWithDevTools())
}

export default store();
