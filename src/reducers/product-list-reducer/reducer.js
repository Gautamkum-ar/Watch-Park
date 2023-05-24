import { HIGH_TO_LOW, LOW_TO_HIGH } from "./action.type";

export const reducer = (state, action) => {
  switch (action.type) {
    case LOW_TO_HIGH:
      return {
        ...state,
        sortByPrice: action.type,
      };
    case HIGH_TO_LOW:
      return {
        ...state,
        sortByPrice: action.type,
      };
    case "FILTER_BY_CATEGORY": {
      return {
        ...state,
        handleCheckboxes: action.payload.target.checked
          ? [...state.handleCheckboxes, action.payload.target.value]
          : state.handleCheckboxes.filter(
              (ems) => ems !== action.payload.target.value
            ),
      };
    }
    default:
      return state;
  }
};
