const eqArrays = (arr1, arr2) => {
  // new equal variable as placeholder for whether arrays are equal
  let equal = true;
  // if arrays are different lengths, equal = false
  if (arr1.length !== arr2.length) {
    equal = false;
  }
  // forEach arr1, check if current elements in both arrays are strictly equal
  arr1.forEach((element, index) => {
    // if not strictly equal, equal variable set to false
    if (element !== arr2[index]) {
      equal = false;
    }
  });
  // return equal variable
  return equal;
};

const assertArraysEqual = (arr1, arr2) => {
  if (!eqArrays(arr1, arr2)) {
    console.log(`🛑🛑🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
    return;
  }

  console.log(`✅✅✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  return;
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3, 5], [1, 2, 3]);