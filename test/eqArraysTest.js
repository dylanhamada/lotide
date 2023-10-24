const eqArrays = require('../eqArrays');
const assertObjectsEqual = require('../assertObjectsEqual');

assertObjectsEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertObjectsEqual(eqArrays([1, 2, 3], [4, 3, 2, 1, 0]), false);
assertObjectsEqual(eqArrays([], []), true);