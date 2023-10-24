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

// takes an array and a callback function as arguments
// returns a slice of the passed-in array until the callback function evaluates to true
const takeUntil = function(array, callback) {
  // newArr placeholder
  const newArr = [];
  // iterate through array
  for (let el of array) {
    // call callback function on each element
    // if callback evaluates to true, return newArr
    if (callback(el)) {
      return newArr;
    }
    // else, push element into newArr
    newArr.push(el);
  }
  // return newArr
  return newArr;
};

assertArraysEqual([ 1, 2, 5, 7, 2 ], takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0))

console.log('---');

assertArraysEqual(['I\'ve', 'been', 'to', 'Hollywood'], takeUntil(["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"], x => x === ','))

console.log('---');

assertArraysEqual([7, 9, 15, 93, 45, 77], takeUntil([7, 9, 15, 93, 45, 77, 26, 5, 11, 81], x => x % 2 === 0));

console.log('---');

assertArraysEqual(["Hello", 666, "Time Bomb", 999], takeUntil(["Hello", 666, "Time Bomb", 999, false, "I\'m", 808, "Ready"], x => typeof x === "boolean"));

module.exports = takeUntil;