import axios from "axios";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { cartReducer } from "../../reducers/cartReducer/cartreducer";

const CartContext = createContext();

const initState = {
  cart: [],
};
export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initState);
  const [cartData, setCartData] = useState([]);

  const getCart = async () => {
    try {
      const response = await axios.get("/api/user/cart", {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      });
      setCartData(await response.data.cart);
      dispatch({ type: "GET_CART", payload: await response.data.cart });
    } catch (e) {
      console.error(e);
    }
  };

  // useEffect(() => {
  //   getCart();
  // }, []);

  const handleAddToCart = async (prod) => {
    getCart();

    try {
      const encodedToken = localStorage.getItem("token");
      const response = await fetch("/api/user/cart", {
        method: "POST",
        headers: { authorization: encodedToken },
        body: JSON.stringify({ product: prod }),
      });
      const { cart } = await response.json();
      dispatch({ type: "ADD_TO_CART", payload: cart });
    } catch (e) {
      console.error(e);
    }
  };

  const increaseItem = async (_id) => {
    try {
      const response = await fetch(`/api/user/cart/${_id}`, {
        method: "POST",
        headers: {
          authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify({ action: { type: "increment" } }),
      });
      const { cart } = await response.json();
      dispatch({ type: "INCREMENT_CART_ITEM", payload: cart });
    } catch (e) {
      console.log(e);
    }
  };
  const deleteItem = async (_id) => {
    try {
      const response = await fetch(`/api/user/cart/${_id}`, {
        method: "DELETE",
        headers: {
          authorization: localStorage.getItem("token"),
        },
      });
      const { cart } = await response.json();
      dispatch({ type: "DELETE_CART_ITEM", payload: cart });
    } catch (e) {
      console.log(e);
    }
  };
  const decreaseItem = async (_id, qty) => {
    if (qty > 1) {
      try {
        const response = await fetch(`/api/user/cart/${_id}`, {
          method: "POST",
          headers: {
            authorization: localStorage.getItem("token"),
          },
          body: JSON.stringify({ action: { type: "decrement" } }),
        });
        const { cart } = await response.json();
        dispatch({ type: "DECREASE_CART_ITEM", payload: cart });
      } catch (e) {
        console.log(e);
      }
    } else {
      deleteItem(_id);
    }
  };
  console.log(state.cart);
  return (
    <CartContext.Provider
      value={{
        handleAddToCart,
        cartData,
        state,
        increaseItem,
        decreaseItem,
        deleteItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
