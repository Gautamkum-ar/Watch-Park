import { createContext, useContext, useReducer, useState } from "react";
import { reducer } from "../../reducers/product-list-reducer/reducer";

const ProductContext = createContext(null);

export const initialState = {
  sortByPrice: "",
  handleCheckboxes: [],
  idealFor: [],
  priceByRange: "",
  ratingFilter: "",
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

        