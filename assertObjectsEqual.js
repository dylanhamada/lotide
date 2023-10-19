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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  // new objOneKeys variable
  const objOneKeys = Object.keys(object1);
  // if objOneKeys.length !== Object.keys(object2).length, return false
  if (objOneKeys.length !== Object.keys(object2).length) return false;
  // for...of objOneKeys
  for (let key of objOneKeys) {
    // if object1[key].isArray
    if (Array.isArray(object1[key])) {
      // if eqArrays(object1[key], object2[key]) === false, return false
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
      // if object1[key] !== object2[key], return false
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  // else return true
  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(obj1, obj2) {
  const inspect = require('util').inspect; // <= add this line
  
  if (!eqObjects(obj1, obj2)) {
    console.log(`🛑🛑🛑 Assertion Failed: [${inspect(obj1)}] !== [${inspect(obj2)}]`);
    return;
  }

  console.log(`✅✅✅ Assertion Passed: [${inspect(obj1)}] === [${inspect(obj2)}]`);
  return;
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertObjectsEqual(shirtObject , anotherShirtObject); // => true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertObjectsEqual(shirtObject , longSleeveShirtObject); // => false

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject); // => true

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertObjectsEqual(multiColorShirtObject, longSleeveMultiColorShirtObject); // => false