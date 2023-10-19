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

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item))
  }
  return results;
};

// test if map successfully squares the elements of an array of numbers
assertArraysEqual([1, 4, 9, 16, 25, 36, 49, 64, 81, 100], map([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], num => num * num));

// test if map successfully capitalizes the first letter of each string element in an array of strings
assertArraysEqual(["Dudley", "Dumbledore", "Draco", "Daria", "Dolly"], map(["dudley", "dumbledore", "draco", "daria", "dolly"], string => string[0].toUpperCase() + string.slice(1)));

// test is map succesffully converts all elements that are strings into numbers
assertArraysEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], map([1, "2", 3, "4", 5, "6", 7, "8", 9, "10"], num => Number(num)));