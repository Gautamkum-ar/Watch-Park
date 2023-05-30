import { useParams } from "react-router-dom";
import { useCart } from "../../contexts/CartContext/CartContext";

import "../individual/style.css";
import { FaHeart, FaStar } from "react-icons/fa";
import { useWishList } from "../../contexts/wishListContext/wishListContext";
import { Loader } from "../../components/loader/Loader";
export const Individual = () => {
  const { state, handleAddToCart, isPresentIncart, isLoading } = useCart();
  const { isPresentInWish, addItemInWishList, removeFromWish } = useWishList();

  const {
    _id,
    name,
    image,
    brand,
    discountPercentage,
    price,
    inStock,
    rating,
    category,
    idealFor,
    warranty,
  } = state?.singleProduct;
  return (
    <>
      {" "}
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="single__product">
            {" "}
            <div className="single__main">
              <section className="single__prodcut__img">
                <img src={image} alt="" />
              </section>

              <section className="single__product__details">
                <h1>{name}</h1>
                <p className="rating">
                  {rating}
                  <FaStar />
                </p>

                <p className="price__container">
                  <span className="disc__price">
                    {" "}
                    &#x20B9;
                    {parseInt(price - (price * discountPercentage) / 100)}
                  </span>
                  <span className="orig__price"> &#x20B9;{price}</span>
                </p>
                <p className="instock">{inStock && "InStock"}</p>
                <p className="brand">
                  <b>Brand:</b> {brand}
                </p>
                <p className="instock">
                  <b>Type: </b> {category}
                </p>
                <p className="instock">
                  <b>Ideal For: </b> {idealFor}
                </p>
                <p className="instock">
                  <b>Warranty: </b> {warranty}
                </p>
                <div className="cart__btns">
                  <button
                    className="add__cart"
                    onClick={() => {
                      !isPresentIncart(_id) &&
                        handleAddToCart(state?.singleProduct);
                    }}
                  >
                    {isPresentIncart(_id) ? "Added to Cart" : "Add To Cart"}
                  </button>
                  <button
                    className="add__wishList"
                    onClick={() =>
                      isPresentInWish(_id)
                        ? removeFromWish(_id)
                        : addItemInWishList(state?.singleProduct)
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
                </div>
              </section>
            </div>
          </div>
        </>
      )}
    </>
  );
};
