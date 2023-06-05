import { createContext, useContext, useReducer } from "react";
import { reducer } from "../../reducers/product-list-reducer/reducer";

const ProductContext = createContext(null);

export const initialState = {
  inputValue: "",
  sortByPrice: "",
  handleCheckboxes: [],
  idealFor: [],
  priceByRange: "",
  ratingFilter: 9000,
  addresses: [
    {
      id: 1,
      name: "Gautam Kumar",
      mobile: "9795411108",
      address: "Bangarasia",
      pincode: 462045,
      city: "Bhopal",
      state: "Madhya Predesh",
    },
  ],
  selectedAdd: {},
  editAdd: {},
  newAddress: {
    name: "",
    mobile: "",
    address: "",
    pincode: "",
    city: "",
    Newsta: "",
  },
};

export const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
