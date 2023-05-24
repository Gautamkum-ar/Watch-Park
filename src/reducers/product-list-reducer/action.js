import { highToLow, lowToHigh } from "../../utils/filterByPrice/FilterByPrice";
import {
  filterAnalog,
  filterCategory,
  filterDigital,
  filterSmartWatch,
} from "../../utils/filterByPrice/filterByCategory";
import { HIGH_TO_LOW, LOW_TO_HIGH } from "./action.type";

export const filteredData = (state, data) => {
  let reservedData = [...data];
  let filterData = [...data];
  let temp = [...data];
  // console.log(state.handleCheckboxes);

  // if (state.handleCheckboxes.length > 0) {
  //   state.handleCheckboxes.every((checkbox) => {
  //     if (checkbox === "Analog") {
  //       filterData = filterAnalog(reservedData);
  //       return (temp = filterData);
  //     } else {
  //       temp = [...temp, ...filterData];
  //     }
  //     if (checkbox === "DIGITAL") {
  //       filterData = filterDigital(reservedData);
  //       return (temp = [...filterData]);
  //     } else {
  //       temp = [...temp, ...filterData];
  //     }
  //     if (checkbox === "SMART WATCH") {
  //       filterData = filterSmartWatch(reservedData);
  //       return (temp = [...filterData]);
  //     } else {
  //       temp = [...temp, ...filterData];
  //     }
  //   });
  // }

  if (state.sortByPrice === LOW_TO_HIGH) {
    filterData = lowToHigh(filterData);
  } else if (state.sortByPrice === HIGH_TO_LOW) {
    filterData = highToLow(filterData);
  }

  if (state.handleCheckboxes.length > 0) {
    state.handleCheckboxes.map((checkbox) => {
      if (checkbox === "Analog") {
        filterData = filterAnalog(filterData);
      }
    });
  }
  return filterData;
};
