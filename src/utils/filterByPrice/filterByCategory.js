export const filterAnalog = (data) =>
  data.filter((product) => product.category === "Analog");
export const filterDigital = (data) =>
  data.filter((product) => product.category === "DIGITAL");
export const filterSmartWatch = (data) =>
  data.filter((product) => product.category === "SMART WATCH");
export const filterCategory = (data) =>
  data.filter((product, cat) => product.category === cat);
