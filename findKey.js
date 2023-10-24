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

const findKey = (obj, fn) => {
  // store obj keys in a variable
  const objKeys = Object.keys(obj);
  // iterate through the obj keys variable
  for (let key of objKeys) {
    // call fn on each element, if truthy, return element
    if (fn(obj[key])) return key;
  }
};

const restaurants = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

// findKey where the callback finds the first property whose "stars" property equals 2
assertEqual(findKey(restaurants, x => x.stars === 2), "noma");

const married = {
  kim: true,
  stan: true,
  brenda: true,
  yolanda: true,
  greg: false,
  ian: true,
  rick: false
};

// findKey where the callback finds the first property whose value is false
assertEqual(findKey(married, x => !x), "greg");

const championships = {
  "Blue Bombers": [1985, 2015, 2018],
  "Happy Toads": [2023],
  "Nice Hamsters": [1988, 1993, 1999, 2005],
  "Scary Raiders": [],
  "Pine Choppers": [2011, 2022],
  "Chili Cheese Fries": [2020]
};

// findKey where the callback finds the first property whose value is an empty array
assertEqual(findKey(championships, x => x.length === 0), "Scary Raiders");

module.exports = findKey;