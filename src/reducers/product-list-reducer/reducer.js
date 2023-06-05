import { HIGH_TO_LOW, LOW_TO_HIGH } from "./action.type";

export const reducer = (state, action) => {

  switch (action.type) {
    case "INPUT_SEARCH": {
      return {
        ...state,
        inputValue: action.payload,
      };
    }
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

    case "FILTER_CATEGORY": {
      return {
        ...state,
        handleCheckboxes: [action.payload],
      };
    }
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
    case "FILTER_BY_RANGE": {
      return {
        ...state,
        priceByRange: action.payload,
      };
    }
    case "IDEAL_FOR": {
      return {
        ...state,
        idealFor: action.payload.target.value,
      };
    }
    case "CLEAR_FILTERS": {
      return {
        ...state,
        sortByPrice: "",
        handleCheckboxes: [],
        idealFor: [],
        priceByRange: "",
        ratingFilter: 9000,
        inputValue: "",
      };
    }

    case "FILTER_BY_RATING": {
      return {
        ...state,
        ratingFilter: action.payload,
      };
    }
    case "ADDRESS": {
      return {
        ...state,
        addresses:[...state.addresses,action.payload]
      };
    }
    case 'UPDATE':{
      return{
        ...state,
        addresses:state.addresses.map((elms)=>elms.id===action.payload.id?{...action.payload}:elms),
      }
    }
    case "SELECTED_ADDRESS": {
      return {
        ...state,
        selectedAdd: action.payload,
      };
    }
    case "EDIT_ADDRESS": {

      return {
        ...state,
        editAdd: state.addresses.find((elms) => elms.id === action.payload),
      };
    }
    case "DELETE_ADDRESS": {
      return {
        ...state,
        addresses: state.addresses.filter(
          (elms) => elms.id !== action.payload.id
        ),
      };
    }
    default:
      return state;
  }
};
