export const filterAnalog = (data) =>
  data.filter((product) => product.category === "Analog");
export const filterDigital = (data) =>
  data.filter((product) => product.category === "DIGITAL");
export const filterSmartWatch = (data) =>
  data.filter((product) => product.category === "SMART WATCH");
export const filterCategory = (data) =>
  data.filter((product, cat) => product.category === cat);

export const filterByIdealForMen = (data) =>
  data.filter((elms) => elms.idealFor === "Men");
export const filterByIdealForWomen = (data) =>
  data.filter((elms) => elms.idealFor === "Women");
export const filterByIdealForKids = (data) =>
  data.filter((elms) => elms.idealFor === "Kids");



  export const search = (data, inputValue) =>
    data.filter((elms) =>
      elms.name.toLowerCase().includes(inputValue.toLowerCase())
    );