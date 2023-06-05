import "../card/style.css";
import { useCart } from "../../contexts/CartContext/CartContext";
import { FaHeart } from "react-icons/fa";
import { useWishList } from "../../contexts/wishListContext/wishListContext";
import { Link, useNavigate } from "react-router-dom";

export const Card = ({ product }) => {
  const { price, name, _id, image, discountPercentage, inStock } = product;
  const { addItemInWishList, isPresentInWish, removeFromWish } = useWishList();

  const { handleAddToCart, isPresentIncart, getSingleProduct } = useCart();

  const token = localStorage.getItem("token");
  const navigate = useNavigate();

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
            : token
            ? addItemInWishList(product)
            : navigate("/login")
        }
      >
        <FaHeart />
      </p>
      <section
        onClick={() => {
          navigate(`/product/${_id}`, getSingleProduct(_id));
        }}
        className="card__image"
      >
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
          onClick={() => {
            token
              ? !isPresentIncart(_id) && handleAddToCart(product)
              : navigate("/login");
          }}
          disabled={!inStock}
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
