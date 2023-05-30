export const lowToHigh = (product) =>
  product.sort(
    (a, b) =>
      parseInt(a.price - (a.discountPercentage * a.price) / 100) -
      parseInt(b.price - (b.discountPercentage * b.price) / 100)
  );

export const highToLow = (product) =>
  product.sort(
    (a, b) =>
      parseInt(b.price - (b.discountPercentage * b.price) / 100) -
      parseInt(a.price - (a.discountPercentage * a.price) / 100)
  );

export const filterByRange = (product, range) =>
  product.filter(
    (elms) =>
      parseInt(elms.price - (elms.discountPercentage * elms.price) / 100) <=
      Number(range)
  );

export const filterByRating5 = (product, rate) =>
  product.filter((elms) => elms.rating <= Number(rate));
