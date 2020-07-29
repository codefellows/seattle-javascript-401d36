import reducer from '../../store/candidates/reducer.js';

describe('Testing our Candidates reducer', () => {
  it('returns proper state', () => {
    const initialState = [];

    let testAction = {
      type: 'FETCH_CANDIDATES',
      payload: [{ name: 'Jacob', votes: 0 }]
    }

    let stateOutput = reducer(initialState, testAction);
    expect(stateOutput).toEqual(testAction.payload);
  })
})