

export const wishReducer = (state, { type, payload }) => {
  switch (type) {
    case "GET_WISHLIST": {
      return {
        ...state,
        wishData: payload,
      };
    }
    case "ADD_TO_WISHLIST": {
      return {
        ...state,
        wishData: payload,
      };
    }
    case "REMOVE_FROM_WISH": {
      return {
        ...state,
        wishData: payload,
      };
    }
  }
};