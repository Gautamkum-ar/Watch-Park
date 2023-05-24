import { useContext } from "react";
import { Card } from "../../components/card/Card";
import { useProduct } from "../../contexts/ProductContext/ProductContext";
import { filteredData } from "../../reducers/product-list-reducer/action";
import "../productListing/style.css";
import FilterBox from "./Filter";
import { APIContext } from "../../contexts/APIContext/APIContext";

const ProductListing = () => {
  const { state } = useProduct();
  const { products } = useContext(APIContext);
  return (
    <div className="product__listing">
      <FilterBox />
      <div className="show__list">
        {filteredData(state, products).map((product) => {
          const { price, name, id, image, discountPercentage } = product;
          return <Card key={id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default ProductListing;
