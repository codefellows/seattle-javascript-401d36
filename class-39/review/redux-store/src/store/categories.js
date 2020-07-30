
const initialState = {
  categories: [
    { normalized_name: 'bread', display_name: 'fresh bread', description: 'bakery fresh breads' },
    { normalized_name: 'vegetables', display_name: 'fresh vegetables', description: 'vegetables fresh from the farm' },
  ],
  activeCategory: '',
}

// Our Reducer
export const categoryReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'CHANGE':
      return { ...state, activeCategory: payload };
    case 'RESET':
      return initialState;

    default:
      return state;
  }
};

// these actions are waiting to be used by a component, and eventually passed into the reducer
export const change = (activeCategory) => {
  return {
    type: 'CHANGE',
    payload: activeCategory,
  }
}

export const reset = () => {
  return {
    type: 'RESET'
  }
}


