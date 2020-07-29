export default (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case 'FETCH_CANDIDATES':
      return payload;
    case 'INCREMENT_VOTES':
      return state.map(candidate => candidate.id === payload.id ? payload : candidate);
    default:
      return state;
  }
}