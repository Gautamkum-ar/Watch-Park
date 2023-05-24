import { useContext } from "react";
import "../productListing/style.css";
import { APIContext } from "../../contexts/APIContext/APIContext";
import { useProduct } from "../../contexts/ProductContext/ProductContext";
import {
  HIGH_TO_LOW,
  LOW_TO_HIGH,
} from "../../reducers/product-list-reducer/action.type";

const FilterBox = () => {
  const { handleCheckboxes, dispatch } = useProduct();
  const { products } = useContext(APIContext);
  return (
    <div className="filter__box">
      <h2>FILTERS</h2>
      <section className="filter__by__price">
        <p>SORT BY PRICE</p>
        <label>
          Low To High
          <input
            type="radio"
            name="price"
            value="Low-To-High"
            onClick={() => dispatch({ type: LOW_TO_HIGH, payload: products })}
          />
        </label>
        <label>
          High To Low
          <input
            type="radio"
            name="price"
            value="High-To-Low"
            onClick={() => dispatch({ type: HIGH_TO_LOW, payload: products })}
          />
        </label>
        <label className="range">
          Price Range
          <input type="range" max="9000" min="150" list="value" />
        </label>
        <datalist id="value">
          <option value="150" label="150"></option>
        </datalist>
      </section>
      <section className="filter__by_Category">
        <p>CATEGORIES</p>

        <label>
          Analog Watches
          <input
            type="checkbox"
            name="Category"
            value="Analog"
            onChange={(e) => {
              dispatch({ type: "FILTER_BY_CATEGORY", payload: e });
            }}
          />
        </label>
        <label>
          Digital Watches
          <input
            type="checkbox"
            name="Category"
            value="DIGITAL"
            onChange={(e) => {
              dispatch({ type: "FILTER_BY_CATEGORY", payload: e });
            }}
          />
        </label>
        <label>
          Smart Watches
          <input
            type="checkbox"
            name="Category"
            value="SMART WATCH"
            onChange={(e) => {
              dispatch({ type: "FILTER_BY_CATEGORY", payload: e });
            }}
          />
        </label>
      </section>
      <section className="ideal__for">
        <p>IDEAL FOR</p>
        <label>
          Men
          <input
            type="checkbox"
            name="Ideal-for"
            value="Men"
            onChange={(e) => {
              dispatch({ type: "IDEAL_FOR", payload: e });
            }}
          />
        </label>
        <label>
          Women
          <input
            type="checkbox"
            name="Ideal-for"
            value="Women"
            onChange={(e) => {
              dispatch({ type: "IDEAL_FOR", payload: e });
            }}
          />
        </label>
        <label>
          Kids
          <input
            type="checkbox"
            name="Ideal-for"
            value="Kids"
            onChange={(e) => {
              dispatch({ type: "IDEAL_FOR", payload: e });
            }}
          />
        </label>
      </section>
    </div>
  );
};

export default FilterBox;
