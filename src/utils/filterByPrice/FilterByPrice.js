export const lowToHigh = (product) => product.sort((a, b) => a.price - b.price);

export const highToLow = (product) => product.sort((a, b) => b.price - a.price);
