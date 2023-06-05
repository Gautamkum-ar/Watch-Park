import { useContext } from "react";
import "../productListing/style.css";
import { APIContext } from "../../contexts/APIContext/APIContext";
import { useProduct } from "../../contexts/ProductContext/ProductContext";
import {
  HIGH_TO_LOW,
  LOW_TO_HIGH,
} from "../../reducers/product-list-reducer/action.type";

const FilterBox = () => {
  const { dispatch, state } = useProduct();
  const { products } = useContext(APIContext);
  return (
    <div className="filter__box">
      <section className="filter__head">
        {" "}
        <h2>FILTERS</h2>{" "}
        <button
          className="clearfilter__btn"
          onClick={() => dispatch({ type: "CLEAR_FILTERS" })}
        >
          Clear
        </button>
      </section>
      <section className="filter__by__price">
        <p>SORT BY PRICE</p>
        <label>
          Low To High
          <input
            type="radio"
            name="price"
            value={LOW_TO_HIGH}
            checked={state.sortByPrice === LOW_TO_HIGH}
            onClick={() => dispatch({ type: LOW_TO_HIGH, payload: products })}
          />
        </label>
        <label>
          High To Low
          <input
            type="radio"
            name="price"
            value={HIGH_TO_LOW}
            checked={state.sortByPrice === HIGH_TO_LOW}
            onClick={() => dispatch({ type: HIGH_TO_LOW, payload: products })}
          />
        </label>
        <label className="range">
          Price Range
          <input
            type="range"
            max="9000"
            min="150"
            value={state.priceByRange}
            onChange={(e) =>
              dispatch({ type: "FILTER_BY_RANGE", payload: e.target.value })
            }
          />
          <datalist id="value">
            <option value="150">150</option>
            <option value="3000">3000</option>
            <option value="6000">6000</option>
            <option value="9000">9000</option>
          </datalist>
          <span className="selected__range">
            Selected Range: {state.priceByRange}
          </span>
        </label>
      </section>
      <section className="filter__by_Category">
        <p>CATEGORIES</p>

        <label>
          Analog Watches
          <input
            type="checkbox"
            name="Category"
            value="Analog"
            checked={state.handleCheckboxes.find((elms) => elms === "Analog")}
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
            checked={state.handleCheckboxes.find((elms) => elms === "DIGITAL")}
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
            checked={state.handleCheckboxes.find(
              (elms) => elms === "SMART WATCH"
            )}
            onChange={(e) => {
              dispatch({ type: "FILTER_BY_CATEGORY", payload: e });
            }}
          />
        </label>
      </section>
      <section className="filter__by__rating">
        <p>Rating</p>
        <label>
          5.0 star & Below
          <input
            type="radio"
            name="star"
            value="5.0"
            checked={state.ratingFilter === "5.0"}
            onChange={(e) => {
              dispatch({ type: "FILTER_BY_RATING", payload: e.target.value });
            }}
          />
        </label>
        <label>
          4.5 star & Below
          <input
            type="radio"
            name="star"
            value="4.5"
            checked={state.ratingFilter === "4.5"}
            onChange={(e) => {
              dispatch({ type: "FILTER_BY_RATING", payload: e.target.value });
            }}
          />
        </label>
        <label>
          4.0 star & Below
          <input
            type="radio"
            name="star"
            value="4.0"
            checked={state.ratingFilter === "4.0"}
            onChange={(e) => {
              dispatch({ type: "FILTER_BY_RATING", payload: e.target.value });
            }}
          />
        </label>
        <label>
          3.5 star & Below
          <input
            type="radio"
            name="star"
            value="3.5"
            checked={state.ratingFilter === "3.5"}
            onChange={(e) => {
              dispatch({ type: "FILTER_BY_RATING", payload: e.target.value });
            }}
          />
        </label>
        <label>
          3.0 star & Below
          <input
            type="radio"
            name="star"
            value="3.0"
            checked={state.ratingFilter === "3.0"}
            onChange={(e) => {
              dispatch({ type: "FILTER_BY_RATING", payload: e.target.value });
            }}
          />
        </label>
      </section>
      <section className="ideal__for">
        <p>IDEAL FOR:</p>
        <select
          name="idealFor"
          onChange={(e) => dispatch({ type: "IDEAL_FOR", payload: e })}
        >
          <option value="All">All</option>
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="Kids">Kids</option>
        </select>
      </section>
    </div>
  );
};

export default FilterBox;




