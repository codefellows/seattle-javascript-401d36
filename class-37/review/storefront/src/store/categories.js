/** 
 * Categories store
 * @component store
 */
// STORE

const initialState = {
  categories: [
    {
      normalizedName: 'Apparel',
      displayName: 'Clothes',
      description: 'A nice little description of category goes here'
    },
    {
      normalizedName: 'Groceries',
      displayName: 'Food',
      description: 'A nice little description of category goes here'
    },
    {
      normalizedName: 'Electronics',
      displayName: 'Electronic',
      description: 'A nice little description of category goes here'
    }
  ],
  activeCategory: '',
}
// Create an action that will trigger the reducer to change the active category
// Update the active category in the reducer when this action is dispatched

// REDUCERS
export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'CHANGECATEGORY':
      return {...state, activeCategory: payload };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

// ACTIONS
export const changeCategory = (categoryName) => {
  return {
    type: 'CHANGECATEGORY',
    payload: categoryName
  }
}

export const reset = () => {
  return {
    type: 'RESET'
  }
}