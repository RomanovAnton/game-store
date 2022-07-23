const calkTotalSum = (arr) => {
  return arr.reduce((acc, cur) => {
    return acc + cur.price;
  }, 0);
};
export default calkTotalSum;
