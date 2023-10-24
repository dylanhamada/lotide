const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertArraysEqual(eqArrays([1, 2, 3], [4, 3, 2, 1, 0]), false);
assertArraysEqual(eqArrays([], []), true);