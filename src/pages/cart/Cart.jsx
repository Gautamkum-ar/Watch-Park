import { Card } from "../../components/card/Card";
import { useCart } from "../../contexts/CartContext/CartContext";
import { FaMinus, FaPlus, FaStar, FaTrash } from "react-icons/fa";
import "../cart/style.css";
import { Billing } from "./Billing";

import emptyCart from "../../assets/images/emptyCart.gif";

const Cart = () => {
  const { cartData, increaseItem, state, decreaseItem, deleteItem } = useCart();

  return (
    <>
      <div className="cart__container">
        {state.cart.length > 0 ? (
          <h1 className="total__item">Shopping Cart:({cartData.length})</h1>
        ) : (
          <p className="no_item">You see there is No item in cart</p>
        )}
        {state.cart.length < 1 ? (
          <div className="empty">
            <img src={emptyCart} alt="emptycart" className="empty__cart" />
          </div>
        ) : (
          <>
            {" "}
            <div className="cart__main">
              <div className="cart__product">
                {state.cart?.map((product) => {
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
                          <span className="orig__price"> &#x20B9;{price}</span>
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
    </>
  );
};

export default Cart;
