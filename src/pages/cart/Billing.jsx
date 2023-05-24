import "../cart/style.css";

export const Billing = ({ cart }) => {
  const totalPrice = cart.reduce(
    (total, { price, discountPercentage, qty }) =>
      total + parseInt(price - (price * discountPercentage) / 100) * qty,
    0
  );
  const totalDiscount = cart.reduce(
    (total, { discountPercentage, price, qty }) =>
      total + parseInt((price * discountPercentage * qty) / 100),
    0
  );

  const subTotal = cart.reduce(
    (total, { price, qty }) => total + price * qty,
    0
  );
  return (
    <div className="billing__container">
      <section className="billing__header">
        {" "}
        <h2>Your Cart </h2>
        <h2>{cart.length} items </h2>
      </section>
      <section className="billing__sub">
        <div className="subt">
          {" "}
          <p>SubTotal</p>
          <p> &#x20B9;{subTotal}</p>
        </div>
        <div className="disc">
          <p>Total Save</p>
          <p> &#x20B9;{totalDiscount}</p>
        </div>
      </section>
      <section className="total__pay">
        <h4>Total</h4>
        <h4> &#x20B9;{totalPrice}</h4>
      </section>

      <button className="checkout__btn">Checkout</button>
    </div>
  );
};
