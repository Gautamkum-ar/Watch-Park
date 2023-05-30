import { useContext } from "react";
import { APIContext } from "../../contexts/APIContext/APIContext";

import "../categoryList/categoryStyle.css";
import { useProduct } from "../../contexts/ProductContext/ProductContext";
import { useNavigate } from "react-router-dom";

const CategoryList = () => {
  const { categories } = useContext(APIContext);
  const { dispatch } = useProduct();
  const navigate = useNavigate();
  return (
    <div className="category__list">
      <h1 className="category__head">CATEGORIES WE HAVE</h1>
      <div className="category__box">
        {categories?.map((category) => {
          const { id, categoryName, description, image } = category;
          return (
            <div key={id} className="cat__card">
              <div className="cat__img">
                <img className="img" src={image} alt={categoryName} />
              </div>
              <section className="cat__detail">
                {" "}
                <h4 className="cat__title">{categoryName?.toUpperCase()}</h4>
                <p className="cat__des">{description}</p>
                <button
                  className="cat__btn"
                  onClick={() => {
                    navigate("/products");
                    dispatch({
                      type: "FILTER_CATEGORY",
                      payload: categoryName,
                    });
                  }}
                >
                  Explore
                </button>
              </section>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryList;
