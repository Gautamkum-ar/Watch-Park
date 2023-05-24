export const cartReducer = (state, action) => {
  switch (action.type) {
    case "GET_CART": {
      return { ...state, cart: action.payload };
    }
    case "INCREMENT_CART_ITEM": {
      return { ...state, cart: action.payload };
    }
    case "ADD_TO_CART": {
      return { ...state, cart: action.payload };
    }
    case "DECREASE_CART_ITEM": {
      return {
        ...state,
        cart: action.payload,
      };
    }
    case "DELETE_CART_ITEM": {
      return {
        ...state,
        cart: action.payload,
      };
    }

    default:
      return state;
  }
};
