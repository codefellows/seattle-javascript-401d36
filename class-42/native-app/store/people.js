const initialState = [
  { name: 'Jacob' }
]

export default reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'FETCH':
      return payload;
    default:
      return state;
  }
}

export const setPeople = (people) => {
  return {
    type: 'FETCH',
    payload: people
  }
}