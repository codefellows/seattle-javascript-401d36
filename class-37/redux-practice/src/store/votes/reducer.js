const initialState = {
  'Jacob': 0,
  'Alistair': 0,
  'Adrian': 0,
  'totalVotes': 0,
}

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'INCREMENT':
      // I don't want to mutate state
      return { ...state, [payload]: state[payload] += 1, totalVotes: state.totalVotes += 1 };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}
