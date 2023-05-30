import { useContext } from "react";
import "../dealOfDay/style.css";
import { APIContext } from "../../contexts/APIContext/APIContext";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/CartContext/CartContext";

const DealOfDay = () => {
  const { products } = useContext(APIContext);
  const { getSingleProduct } = useCart();
  const navigate = useNavigate();
  return (
    <>
      <div className="deal__Container">
        <h1>BEST DEAL OF THE DAY FOR YOU</h1>
        <div className="dael__main">
          {products
            .filter((product) => product.discountPercentage >= 70)
            .map((prod) => {
              const { _id, discountPercentage, name, image, price } = prod;
              return (
                <div key={_id} className="deal__card">
                  <section
                    onClick={() => {
                      navigate(`/product/${_id}`, getSingleProduct(_id));
                    }}
                    className="deal__img"
                  >
                    <p>{discountPercentage}%</p>
                    <img src={image} alt={name} />
                  </section>
                  <section className="deal__des">
                    <h3>{name.slice(0, 20)}</h3>
                    <p className="price">
                      <b>Price:</b>
                      <span className="after__disc">
                        {" "}
                        &#x20B9;
                        {parseInt(price - (price * discountPercentage) / 100)}
                      </span>
                      <span className="original__price">{price}</span>
                    </p>
                  </section>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default DealOfDay;
