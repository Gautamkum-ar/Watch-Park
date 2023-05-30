import { createContext, useContext, useEffect, useReducer } from "react";
import { wishReducer } from "../../reducers/wishListReducer/w-L-reducer";
import { toast } from "react-toastify";

const WishListContext = createContext(null);

const initState = {
  wishData: [],
};
export const WishListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(wishReducer, initState);

  const getWishListData = async () => {
    try {
      const response = await fetch("/api/user/wishlist", {
        method: "GET",
        headers: {
          authorization: localStorage.getItem("token"),
        },
      });
      const { wishlist } = await response.json();
      dispatch({ type: "GET_WISHLIST", payload: wishlist });
    } catch (e) {
      console.error(e);
    }
  };

  const addItemInWishList = async (product) => {
    toast.success("item is added to your wishList");
    try {
      const response = await fetch("/api/user/wishlist", {
        method: "POST",
        headers: { authorization: localStorage.getItem("token") },
        body: JSON.stringify({ product }),
      });
      const { wishlist } = await response.json();
      dispatch({ type: "ADD_TO_WISHLIST", payload: wishlist });
      console.log(wishlist);
    } catch (e) {
      console.error(e);
    }
  };

  const removeFromWish = async (_id) => {
    toast.warning("Item remove from your wishList");
    try {
      const response = await fetch(`/api/user/wishlist/${_id}`, {
        method: "DELETE",
        headers: { authorization: localStorage.getItem("token") },
      });
      const { wishlist } = await response.json();
      console.log(wishlist);
      dispatch({ type: "REMOVE_FROM_WISH", payload: wishlist });
    } catch (e) {
      console.error(e);
    }
  };
  const wishlistLength = state?.wishData?.length;

  const isPresentInWish = (_id) => {
    const findItem = state?.wishData?.find((item) => item._id === _id);
    return findItem ? true : false;
  };

  useEffect(() => {
    getWishListData();
  }, []);
  return (
    <WishListContext.Provider
      value={{
        getWishListData,
        addItemInWishList,
        state,
        wishlistLength,
        removeFromWish,
        isPresentInWish,
      }}
    >
      {children}
    </WishListContext.Provider>
  );
};

export const useWishList = () => useContext(WishListContext);
