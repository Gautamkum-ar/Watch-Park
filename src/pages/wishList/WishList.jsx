import { FaStar, FaTrash } from "react-icons/fa";
import { useWishList } from "../../contexts/wishListContext/wishListContext";
import "../wishList/style.css";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext/CartContext";

const WishList = () => {
  const { state, removeFromWish } = useWishList();
  const { handleAddToCart, isPresentIncart, increaseItem } = useCart();

  return (
    <div className="wishList__container">
      {state?.wishData?.length < 1 ? (
        <>
          <div className="wish__empty">
            <h1>😕</h1>
            <h1>Your wishlist is empty</h1>
            <Link to="/products">Keep Browsing</Link>
          </div>
        </>
      ) : (
        <>
          <h1>Wishlist ({state?.wishData?.length})</h1>{" "}
          <div className="wish__main">
            {state?.wishData?.map((item) => {
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
              } = item;
              return (
                <div key={_id} className="wish__card">
                  <section className="wish__img">
                    <img src={image} alt={name} />
                  </section>
                  <section className="wish__detail">
                    <h3>{name}</h3>

                    <p className="wish__rating">
                      {rating}
                      <FaStar />
                    </p>
                    <p className="wish__disc">{discountPercentage}% OFF</p>
                    <p className="wish__brand">{brand}</p>
                    <p className="wish__inStock">
                      {inStock ? "InStock" : "Out of Stock"}
                    </p>
                    <p className="wish__price">
                      <span className="dis__price">
                        &#x20B9;{" "}
                        {parseInt(price - (price * discountPercentage) / 100)}
                      </span>
                      <span className="ori__price"> &#x20B9;{price}</span>
                    </p>

                    <button
                      onClick={() =>
                        isPresentIncart(_id)
                          ? increaseItem(_id)
                          : handleAddToCart(item)
                      }
                      className="wish__to__cart"
                    >
                      Add to Cart
                    </button>
                  </section>
                  <button
                    onClick={() => removeFromWish(_id)}
                    className="wish__remove"
                  >
                    <FaTrash />
                  </button>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default WishList;
