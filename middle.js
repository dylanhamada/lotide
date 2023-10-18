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

const assertArraysEqual = (arr1, arr2) => {
  // if eqArrays returns false, log an assertion failed and return out of the function
  if (!eqArrays(arr1, arr2)) {
    console.log(`🛑🛑🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
    return;
  }

  // return an assertion passed by default
  console.log(`✅✅✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  return;
};

const middle = (arr) => {
  // placeholder array variable
  const returnArr = [];
  // if array length is 1-2
  if (arr.length < 3) return returnArr;
  // if array length is odd
  if (arr.length % 2 !== 0) {
    // push one middle element into returnArr
    returnArr.push(arr[((arr.length + 1) / 2) - 1]);
    return returnArr;
  }
  // if array length is even
  if (arr.length % 2 === 0) {
    // push two middle elements into returnArr
    returnArr.push(arr[(arr.length / 2) - 1], arr[arr.length / 2]);
    return returnArr;
  }
};

assertArraysEqual([50, 60], middle([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]));
assertArraysEqual([98], middle([100, "beer", 99, "beer", 98, "beer", 97, "beer", 96]));
assertArraysEqual([], middle(["yin", "yang"]));