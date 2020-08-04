import { createStore, combineReducers } from 'redux';

import people from './people.js';

const reducers = combineReducers({ people });

const store = createStore(reducers);

export default store;
