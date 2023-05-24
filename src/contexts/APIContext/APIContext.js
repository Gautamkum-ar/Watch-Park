import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const APIContext = createContext(null);

export const APIConetextProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const getCategory = async () => {
    try {
      const response = axios.get("/api/categories");
      response.then((data) => setCategories(data.data?.categories));
    } catch (e) {
      console.error(e);
    }
  };

  const getProducts = async () => {
    try {
      const response = axios.get("/api/products");
      response.then((data) => {
        setProducts(data.data?.products);
      });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getCategory();
    getProducts();
  }, []);

  return (
    <APIContext.Provider value={{ categories, products }}>
      {children}
    </APIContext.Provider>
  );
};
