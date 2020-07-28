// The number of actions here should be reflected by the number of case 'types'

export const increment = (name) => {
  return {
    type: 'INCREMENT',
    payload: name,
  }
}

export const reset = () => {
  return {
    type: 'RESET',
  }
}