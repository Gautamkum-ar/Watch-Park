import { useCart } from "../../contexts/CartContext/CartContext";
import { useProduct } from "../../contexts/ProductContext/ProductContext";

export const OrderDetails = () => {
  const { selectedAddress } = useProduct();
  const { state } = useCart();
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
    <div className="order__details">
      <h1>Thanks For Shopping</h1>
      <div className="checkout__details">
        <p className="details__tilte">ORDER DETAILS</p>
        <div className="checkout__items">
          <div className="name__qty">
            <h3>Item</h3>
            <h3>Qty</h3>
          </div>
          {state.cart?.map((elms) => (
            <div className="name__qty">
              <p>{elms.name}</p>
              <img className="order__img" src={elms.image} alt={elms.name} />
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
            <span>Total Discount </span> <span>- &#x20B9;{totalDiscount}</span>
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
          <h4>{selectedAddress.name} </h4>
          {selectedAddress.address}, {selectedAddress.city},{" "}
          {selectedAddress.state} ({selectedAddress.pincode}
          ) <br /> {selectedAddress.mobile}
        </div>
      </div>
    </div>
  );
};
