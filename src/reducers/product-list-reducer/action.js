import {
  filterByRange,
  filterByRating5,
  highToLow,
  lowToHigh,
} from "../../utils/filterByPrice/FilterByPrice";
import {
  filterAnalog,
  filterByIdealForKids,
  filterByIdealForMen,
  filterByIdealForWomen,
  filterDigital,
  filterSmartWatch,
  search,
} from "../../utils/filterByPrice/filterByCategory";
import { HIGH_TO_LOW, LOW_TO_HIGH } from "./action.type";

export const filteredData = (state, data) => {
  let reservedData = [...data];
  let filterData;

  //search input

  if (state.inputValue !== "") {
    filterData = search(
      filterData ? filterData : reservedData,
      state.inputValue
    );
  }

  // filter by category

  if (state.handleCheckboxes.length > 0) {
    let temp;
    filterData = [];

    state.handleCheckboxes.map((checkbox) => {
      if (checkbox === "Analog") {
        temp = filterAnalog(reservedData);
        return (filterData = [...temp, ...filterData]);
      }
      if (checkbox === "DIGITAL") {
        temp = filterDigital(reservedData);
        return (filterData = [...temp, ...filterData]);
      }
      if (checkbox === "SMART WATCH") {
        temp = filterSmartWatch(reservedData);
        return (filterData = [...filterData, ...temp]);
      }
    });
  }

  // idealFor Filter

  if (state.idealFor === "Men") {
    filterData = filterByIdealForMen(filterData ? filterData : reservedData);
  }
  if (state.idealFor === "Women") {
    filterData = filterByIdealForWomen(filterData ? filterData : reservedData);
  }
  if (state.idealFor === "Kids") {
    filterData = filterByIdealForKids(filterData ? filterData : reservedData);
  }

  // RangeFilter and price filter

  if (state.priceByRange > 0) {
    filterData = filterByRange(
      filterData ? filterData : reservedData,
      state.priceByRange
    );
  }

  // rating filter

  if (state.ratingFilter === "5.0") {
    filterData = filterByRating5(filterData ? filterData : reservedData, "5.0");
  }
  if (state.ratingFilter === "4.5") {
    filterData = filterByRating5(filterData ? filterData : reservedData, "4.5");
  }
  if (state.ratingFilter === "4.0") {
    filterData = filterByRating5(filterData ? filterData : reservedData, "4.0");
  }
  if (state.ratingFilter === "3.5") {
    filterData = filterByRating5(filterData ? filterData : reservedData, "3.5");
  }
  if (state.ratingFilter === "3.0") {
    filterData = filterByRating5(filterData ? filterData : reservedData, "3.0");
  }

  if (state.sortByPrice === LOW_TO_HIGH) {
    filterData = lowToHigh(filterData ? filterData : reservedData);
  } else if (state.sortByPrice === HIGH_TO_LOW) {
    filterData = highToLow(filterData ? filterData : reservedData);
  }

  return filterData ? filterData : reservedData;
};
