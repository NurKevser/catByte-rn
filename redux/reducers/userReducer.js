const INITIAL_STATE = [];
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return [...state, action.payload];
      break;
    case 'DELETE_USER':
      return [...state];
      break;
    default:
      return state;
      break;
  }
};

export default userReducer;
