import { createContext, useEffect, useState } from "react";

export const APIContext = createContext(null);

export const APIConetextProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getCategory = async () => {
    try {
      const response = await fetch("/api/categories", {
        method: "GET",
      });
      const { categories } = await response.json();
      setCategories(categories);
    } catch (e) {
      console.error(e);
    }
  };

  const getProducts = async () => {
    try {
      const response = await fetch("/api/products", {
        method: "GET",
      });
      const { products } = await response.json();
      setProducts(products);

      setIsLoading(false);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    setIsLoading(true);

    getCategory();
    getProducts();
  }, []);

  return (
    <APIContext.Provider value={{ categories, products, isLoading }}>
      {children}
    </APIContext.Provider>
  );
};
