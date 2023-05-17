export const Card = () => {
  return (
    <div className="card">
      <section className="card__image"></section>

      <section className="card__details">
        <h3 className="card__title">Title of the product</h3>

        <p className="card__price">
          <span className="origanal">Rs 180</span>
          <span className="off__price"> Rs 300</span>
          <span className="off">40%</span>
        </p>
        <button className="add__cart">Add To Cart</button>
      </section>
    </div>
  );
};
