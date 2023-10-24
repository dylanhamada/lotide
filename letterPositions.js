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

const letterPositions = function(sentence) {
  const results = {};
  // for loop the sentence string
  for (let i = 0; i < sentence.length; i++) {
    // only execute the following if character is not a space
    if (sentence[i] !== " ") {
      // if current element is not in results, add it with an empty array
      if (!results[sentence[i]]) {
        results[sentence[i]] = [];
      } 
      // push index into current element property in results
      results[sentence[i]].push(i);
    } 
  }
  // return results
  return results;
};

//tests
const resultOne = letterPositions("lighthouse in the house");

assertArraysEqual([3, 5, 15, 18], resultOne.h);
assertArraysEqual([9, 16, 22], resultOne.e);
assertArraysEqual([0], resultOne.l);

module.exports = letterPositions;