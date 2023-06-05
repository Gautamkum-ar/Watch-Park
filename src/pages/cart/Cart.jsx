import { useCart } from "../../contexts/CartContext/CartContext";
import { FaHeart, FaMinus, FaPlus, FaStar, FaTrash } from "react-icons/fa";
import "../cart/style.css";
import { Billing } from "./Billing";

import emptyCart from "../../assets/images/emptyCart.gif";
import { useWishList } from "../../contexts/wishListContext/wishListContext";
import { Loader } from "../../components/loader/Loader";
import { Footer } from "../../components/footer/Footer";

const Cart = () => {
  const { increaseItem, state, decreaseItem, deleteItem, isLoading } =
    useCart();
  const { addItemInWishList, isPresentInWish, removeFromWish } = useWishList();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="cart__container">
          {state?.cart?.length > 0 ? (
            <h1 className="total__item">
              Shopping Cart:({state?.cart.length})
            </h1>
          ) : (
            <p className="no_item">You see there is No item in cart</p>
          )}
          {state?.cart?.length < 1 ? (
            <div className="empty">
              <img src={emptyCart} alt="emptycart" className="empty__cart" />
            </div>
          ) : (
            <>
              {" "}
              <div className="cart__main">
                <div className="cart__product">
                  {state?.cart?.map((product) => {
                    const {
                      image,
                      name,
                      _id,
                      price,
                      discountPercentage,
                      rating,
                      brand,
                      inStock,
                      qty,
                    } = product;
                    return (
                      <div key={_id} className="cart__card">
                        <button
                          className="delete__btn"
                          onClick={() => deleteItem(_id)}
                        >
                          <FaTrash />
                        </button>
                        <button
                          className="add__to__wishList"
                          onClick={() =>
                            isPresentInWish(_id)
                              ? removeFromWish(_id)
                              : addItemInWishList(product)
                          }
                        >
                          {isPresentInWish(_id) ? (
                            <p className="rmv">
                              {" "}
                              <FaHeart />
                            </p>
                          ) : (
                            <p className="ad">
                              {" "}
                              <FaHeart />
                            </p>
                          )}
                        </button>

                        <section className="img__container">
                          <img src={image} alt={name} />
                        </section>
                        <section className="cart__details">
                          <h3>{name}</h3>
                          <p className="rating">
                            {rating}
                            <FaStar />
                          </p>
                          <p className="brand">By: {brand}</p>

                          <p className="price__container">
                            <span className="disc__price">
                              {" "}
                              &#x20B9;
                              {parseInt(
                                price - (price * discountPercentage) / 100
                              )}
                            </span>
                            <span className="orig__price">
                              {" "}
                              &#x20B9;{price}
                            </span>
                          </p>
                          <p className="instock">{inStock && "InStock"}</p>
                          <div className="cart__btns">
                            <button onClick={() => decreaseItem(_id, qty)}>
                              <FaMinus />
                            </button>
                            <p className="qty">{qty}</p>
                            <button onClick={() => increaseItem(_id)}>
                              <FaPlus />
                            </button>
                          </div>
                        </section>
                      </div>
                    );
                  })}
                </div>
                <Billing cart={state?.cart} />
              </div>
            </>
          )}
        </div>
      )}
      <Footer />
    </>
  );
};

export default Cart;
