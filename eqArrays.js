const eqArrays = (arr1, arr2) => {
  // if arrays are different lengths, return false
  if (arr1.length !== arr2.length) {
    return false;
  }
  // for loop arr1, check if current elements in both arrays are strictly equal
  for (let i = 0; i < arr1.length; i++) {
      // if not strictly equal, return false
      if (arr1[i] !== arr2[i]) return false;
  }
  // return equal variable
  return true;
};

module.exports = eqArrays;