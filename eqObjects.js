const assertEqual = function(actual, expected) {
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

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertObjectsEqual(eqObjects(shirtObject , anotherShirtObject), true); // => true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertObjectsEqual(eqObjects(shirtObject , longSleeveShirtObject), false); // => false

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertObjectsEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true); // => true

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertObjectsEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false); // => false

module.exports = eqObjects;