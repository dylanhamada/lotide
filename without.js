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
  if (!eqArrays(arr1, arr2)) {
    console.log(`🛑🛑🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
    return;
  }

  console.log(`✅✅✅ Assertion Passed: [${arr1}] === [${arr2}]`);
  return;
};

const without = (source, itemsToRemove) => {
  // reducer function to create a new array that doesn't include any elements from itemsToRemove
  const cleanArr = source.reduce((acc, curr) => {
    // if itemsToRemove doesn't contain the current source element, push current source element into accumulator array
    if (!itemsToRemove.includes(curr)) {
      acc.push(curr);
    }
    // return accumulator array
    return acc;
  }, []);
  // return the value of cleanArr
  return cleanArr;
}

console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));
console.log(without([],[]));
console.log(without(["A", 2, "G", 29],["G", "A"]));

assertArraysEqual([11, 12, 13], without([15, 11, 19, 12, 99, 13],[15, 19, 99]));
assertArraysEqual(["Bo", "de", "ga"], without(["Boo", 25, "de", 190, "ga"],[25, 190]))

console.log(eqArrays(["Bo", "de"], ["Boo", "de"]));
console.log(eqArrays([1, 2], [1, 3]));

module.exports = without;