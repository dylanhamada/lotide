const assertObjectsEqual = function(actual, expected) {
  // if actual value does not match expected value, print assertion failed message
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
    return;
  }

  // otherwise, assume assertion passed and print that
  console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  return;
};

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

assertObjectsEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertObjectsEqual(eqArrays([1, 2, 3], [4, 3, 2, 1, 0]), false);
assertObjectsEqual(eqArrays([], []), true);

