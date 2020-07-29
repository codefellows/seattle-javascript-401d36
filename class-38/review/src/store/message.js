const initialState = [];

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SEND":
      return [...state, payload];
    case "GET":
      return state;
    default:
      return state;
  }
};

export const sendMessage = message => {
  return {
    type: "SEND",
    payload: message
  };
};

export const getMessages = () => {
  return {
    type: "GET"
  };
};