// this file defines our specific subset of state? Our Reducer for votes? and our actions that our components can perform on our votes

// Our global state object just for votes
const initialState = {
  candidates: [
    { name: 'Jacob', votes: 0 },
    { name: 'Alistair', votes: 0 },
    { name: 'Adrian', votes: 0 },
  ],
  totalVotes: 0
}

// Reducers, a function that takes an action and produces a new version of state, from a payload and a type.
export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'INCREMENT':
      let totalVotes = state.totalVotes + 1;
      let candidates = state.candidates.map(candidate => {
        if (candidate.name === payload) {
          return { name: candidate.name, votes: candidate.votes + 1 };
        }

        // this is the new state for candidate!
        return candidate;
      });

      // this is the updated state for our votes.
      return { totalVotes, candidates };

    case 'RESET':
      return initialState;
    default:
      return state;
  }
}


// actions are the functions that components can run themselves
export const increment = (name) => {
  return {
    type: 'INCREMENT',
    payload: name,
  }
}

export const reset = () => {
  return {
    type: 'RESET'
  }
}