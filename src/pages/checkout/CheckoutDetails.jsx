import { useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/CartContext/CartContext";

export const CheckoutDetails = ({ selectedAdd }) => {
  const { state } = useCart();

  const navigate = useNavigate();
  const totalPrice = state?.cart?.reduce(
    (total, { price, qty }) => total + price * qty,
    0
  );

  const totalDiscount = state?.cart?.reduce(
    (total, { price, qty, discountPercentage }) =>
      total + parseInt((price * discountPercentage * qty) / 100),
    0
  );

  return (
    <>
      {state?.cart.length > 0 ? (
        <div className="checkout__details">
          <p className="details__tilte">INVOICE</p>
          <div className="checkout__items">
            <div className="name__qty">
              <h3>Item</h3>
              <h3>Qty</h3>
            </div>
            {state.cart?.map((elms) => (
              <div className="name__qty">
                <p>{elms.name}</p>
                <p>{elms.qty}</p>
              </div>
            ))}
          </div>
          <p className="details__tilte">PRICE DETAILS</p>
          <div>
            <p className="name__qty">
              <span>Price({state.cart?.length} items)</span>{" "}
              <span> &#x20B9;{totalPrice}</span>
            </p>
            <p className="name__qty">
              <span>Total Discount </span>{" "}
              <span>- &#x20B9;{totalDiscount}</span>
            </p>
            <p className="name__qty">
              <span>Delivery Charge </span> <span>Free</span>
            </p>
            <h3 className="name__qty">
              <span>Total Amount </span>{" "}
              <span> &#x20B9;{totalPrice - totalDiscount}</span>
            </h3>
          </div>
          <p className="details__tilte">DELIVER TO </p>

          <div className="add">
            <h4>{selectedAdd.name} </h4>
            {selectedAdd.address}, {selectedAdd.city}, {selectedAdd.state} (
            {selectedAdd.pincode}
            ) <br /> {selectedAdd.mobile}
          </div>

          <button
            className="place__order"
            onClick={() => navigate("/orderdetail")}
          >
            Place Order
          </button>
        </div>
      ) : (
        <h1 style={{ color: "red" }}>You Have no Item proceed Further</h1>
      )}
    </>
  );
};
