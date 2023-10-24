const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
    return;
  }

  console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  return;
};

const findKeyByValue = (obj, val) => {
  // Object.keys to create array of obj keys
  const objKeys = Object.keys(obj);
  // for...of obj keys
  for (let key of objKeys) {
    // if value === val, return obj key
    if (obj[key] === val) {
      return key;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
  documentary: "Grant",
  reality: "Survivor",
  sports: "Superbowl",
  children: "The Expanse"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Superbowl"), "reality");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "children");

module.exports = findKeyByValue;