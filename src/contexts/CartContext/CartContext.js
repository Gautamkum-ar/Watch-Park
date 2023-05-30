import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { cartReducer } from "../../reducers/cartReducer/cartreducer";
import { toast } from "react-toastify";

const CartContext = createContext();

const initState = {
  cart: [],
  singleProduct: {},
};
export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initState);
  const [cartData, setCartData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const getCart = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/user/cart", {
        method: "GET",
        headers: {
          authorization: localStorage.getItem("token"),
        },
      });
      const { cart } = await response.json();
      setCartData(cart);
      dispatch({ type: "GET_CART", payload: cart });
      setIsLoading(false);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getCart();
  }, []);

  const handleAddToCart = async (prod) => {
    toast.success("item is Add to your cart");
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
    toast.success("Item Quantity increase By +1");

    try {
      const response = await fetch(`/api/user/cart/${_id}`, {
        method: "POST",
        headers: {
          authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify({ action: { type: "increment" } }),
      });
      const { cart } = await response.json();
      console.log(cart);
      dispatch({ type: "INCREMENT_CART_ITEM", payload: cart });
    } catch (e) {
      console.log(e);
    }
  };
  const deleteItem = async (_id) => {
    toast.warning("Item deleted succesfully");
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
      toast.warning("Item quantity remove by -1");
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

  const getSingleProduct = async (_id) => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/products/${_id}`, {
        headers: "GET",
      });
      const { product } = await response.json();
      dispatch({ type: "GET_SINGLE_PRODUCT", payload: product });
      setIsLoading(false);
    } catch (e) {
      console.error(e);
    }
  };
  const isPresentIncart = (_id) => {
    const findItem = state?.cart?.find((item) => item._id === _id);
    return findItem ? true : false;
  };
  console.log(state.singleProduct);

  return (
    <CartContext.Provider
      value={{
        handleAddToCart,
        cartData,
        state,
        increaseItem,
        decreaseItem,
        deleteItem,
        isPresentIncart,
        getSingleProduct,
        isLoading,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
