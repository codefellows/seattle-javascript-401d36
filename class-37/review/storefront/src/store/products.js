// Products

const initialState = [
  {
    category: 'associated-category',
    name: 'Product Name',
    description: 'A nice little product description goes here',
    price: '$$',
    inventoryCount: 5
  },
  {
    category: 'associated number 2',
    name: 'Product Name',
    description: 'A nice little product description goes here',
    price: '$$$',
    inventoryCount: 10
  },
  {
    category: 'associated number 3',
    name: 'Product Name',
    description: 'A nice little product description goes here',
    price: '$',
    inventoryCount: 3
  }
]

// REDUCERS

// Create a reducer that will filter the products list based on the active category

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'FILTER': // 'CHANGE'
      let filteredProducts = []; //TODO: SET THE STATE so REAcT KNOWS
      for (let i = 0; i < state.products.length; i++) {
        if (state.products[i].category === payload) {
          filteredProducts.push(state.products[i]); //TODO: MAKE THIS ADJUST STATE
        }
        return { ...state, products: filteredProducts } //TODO: Adjust state rather than mess up the whole products array
      }
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

// ACTIONS

// Create an action that will trigger when the active category is changed
// HINT: Multiple reducers can respond to the same actions

// could this just be the CHANGECATEGORY from categories?
export const filter = (categoryName) => {
  return {
    type: 'FILTER',
    payload: categoryName
  }
}