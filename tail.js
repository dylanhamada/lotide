const tail = (arr) => {
  // create variable to house new array
  // make new variable equal to old array
  const newArr = arr.slice();
  // use shift on new array
  newArr.shift();
  // return new array
  return newArr;
};

module.exports = tail;