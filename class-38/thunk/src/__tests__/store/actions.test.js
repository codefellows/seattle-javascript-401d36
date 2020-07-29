import thunk from 'redux-thunk';
import { fetchCandidates } from '../../store/candidates/actions.js';
import configMockStore from 'redux-mock-store';

const createStore = configMockStore([thunk]);

describe('Testing async actions', () => {
  it('should fetch candidates', () => {
    const store = createStore([]);

    return store.dispatch(fetchCandidates())
      .then(() => {
        let dispatchedActions = store.getActions();
        expect(dispatchedActions[0].type).toEqual('FETCH_CANDIDATES');
        expect(dispatchedActions[0].payload.length).toBeTruthy();
      });

    // weaker promise based testing, with none working api endpoint
    // let actions = store.dispatch(fetchCandidates())
    // expect(actions).resolves.toBe({});
  });
});
