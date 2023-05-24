import axios from "axios";
import { createContext, useContext } from "react";

const WishListContext = createContext(null);

export const WishListProvider = ({ children }) => {
  const getWishListData = async () => {
    try {
      const response = await axios.get("/api/user/wishlist", {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      });
      console.log(response.data.wishlist);
    } catch (e) {
      console.error(e);
    }
  };

  const addItemInWishList = async (product) => {
    try {
      const response = await fetch("/api/user/wishlist", {
        method: "POST",
        headers: { authorization: localStorage.getItem("token") },
        body: JSON.stringify({ product }),
      });
      const { wishlist } = await response.json();
      console.log(wishlist);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <WishListContext.Provider value={{ getWishListData, addItemInWishList }}>
      {children}
    </WishListContext.Provider>
  );
};

export const useWishList = () => useContext(WishListContext);
