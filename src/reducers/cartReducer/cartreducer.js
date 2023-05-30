export const cartReducer = (state, { type, payload }) => {
  switch (type) {
    case "GET_CART": {
      return { ...state, cart: payload };
    }
    case "INCREMENT_CART_ITEM": {
      return { ...state, cart: payload };
    }
    case "ADD_TO_CART": {
      return { ...state, cart: payload };
    }
    case "DECREASE_CART_ITEM": {
      return {
        ...state,
        cart: payload,
      };
    }
    case "DELETE_CART_ITEM": {
      return {
        ...state,
        cart: payload,
      };
    }
    case "GET_SINGLE_PRODUCT": {
      return {
        ...state,
        singleProduct: payload,
      };
    }

    default:
      return state;
  }
};
