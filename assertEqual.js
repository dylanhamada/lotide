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

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(1, 1);
assertEqual(1, 10);