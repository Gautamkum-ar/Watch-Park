import { useContext } from "react";
import { Card } from "../../components/card/Card";
import { useProduct } from "../../contexts/ProductContext/ProductContext";
import { filteredData } from "../../reducers/product-list-reducer/action";
import "../productListing/style.css";
import FilterBox from "./Filter";
import { APIContext } from "../../contexts/APIContext/APIContext";
import { Loader } from "../../components/loader/Loader";

import image from "../../assets/images/NoResult.png";

const ProductListing = () => {
  const { state } = useProduct();
  const { products, isLoading } = useContext(APIContext);
  const displayData = filteredData(state, products);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="product__listing">
          <FilterBox />
          {displayData.length < 1 ? (
            <div className="no_product_found">
              {" "}
              <img src={image} alt="no data found" />
              <h1> Ups!... no results found</h1>
              <p>Please try another search</p>
            </div>
          ) : (
            <div>
              <h1 className="totalProduct">
                Showing Total Products (<span>{displayData.length}</span>)
              </h1>
              <div className="show__list">
                {displayData.map((product) => {
                  const { _id } = product;
                  return <Card key={_id} product={product} />;
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ProductListing;
