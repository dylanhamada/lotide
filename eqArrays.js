const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
    return;
  }

  console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  return;
};

const eqArrays = (arr1, arr2) => {
  // new equal variable as placeholder for whether arrays are equal
  let equal = true;
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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS