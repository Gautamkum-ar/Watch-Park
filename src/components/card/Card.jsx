import { useContext } from "react";
import "../card/style.css";
import { useCart } from "../../contexts/CartContext/CartContext";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useWishList } from "../../contexts/wishListContext/wishListContext";

export const Card = ({ product }) => {
  const { price, name, _id, image, discountPercentage } = product;
  const {addItemInWishList}=useWishList()

  const { handleAddToCart, state } = useCart();
  const isPresentIncart = () => {
    const findItem = state.cart.find((item) => item._id === _id);
    return findItem ? true : false;
  };

  return (
    <div className="card" key={_id}>
      <p className="add__to__wishlist" onClick={()=>addItemInWishList(product)}>
        <FaHeart />
      </p>
      <section className="card__image">
        <img src={image} alt={name} />
      </section>

      <section className="card__details">
        <p className="card__title">{name.slice(0, 25)}</p>

        <p className="card__price">
          <span className="origanal">
            &#x20B9;{parseInt(price - (price * discountPercentage) / 100)}
          </span>
          <span className="off__price"> &#x20B9;{price}</span>
          <span className="off">{discountPercentage}% OFF</span>
        </p>
        <button
          className="add__cart"
          onClick={() => !isPresentIncart(_id) && handleAddToCart(product)}
        >
          {isPresentIncart(_id) ? (
            <Link to="/cart">Go To Cart</Link>
          ) : (
            "Add To Cart"
          )}
        </button>
      </section>
    </div>
  );
};
