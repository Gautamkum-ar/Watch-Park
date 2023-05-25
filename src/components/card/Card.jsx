import { useContext } from "react";
import "../card/style.css";
import { useCart } from "../../contexts/CartContext/CartContext";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useWishList } from "../../contexts/wishListContext/wishListContext";

export const Card = ({ product }) => {
  const { price, name, _id, image, discountPercentage, inStock } = product;
  const { addItemInWishList, isPresentInWish, removeFromWish } = useWishList();

  const { handleAddToCart, isPresentIncart } = useCart();

  return (
    <div
      className="card"
      key={_id}
      style={{ background: !inStock && "#c7c8ca", zIndex: !inStock && 10 }}
    >
      <p
        style={{ color: isPresentInWish(_id) && "#e547a1" }}
        className="add__to__wishlist"
        onClick={() =>
          isPresentInWish(_id)
            ? removeFromWish(_id)
            : addItemInWishList(product)
        }
      >
        <FaHeart />
      </p>
      <section className="card__image">
        <img style={{ opacity: !inStock ? 0.5 : 1 }} src={image} alt={name} />
      </section>

      <section className="card__details">
        <p className="card__title">{name.slice(0, 25)}</p>

        <p className="card__price">
          <span className="origanal">
            &#x20B9;{parseInt(price - (price * discountPercentage) / 100)}
          </span>
          <span className="off__price"> &#x20B9;{price}</span>
          <span style={{ background: !inStock && "#db9928" }} className="off">
            {inStock ? <>{discountPercentage}% OFF</> : "Out Of stock"}
          </span>
        </p>
        <button
          className="add__cart"
          onClick={() => !isPresentIncart(_id) && handleAddToCart(product)}
        >
          {isPresentIncart(_id) ? "Added to Cart" : "Add To Cart"}
        </button>
      </section>
    </div>
  );
};
