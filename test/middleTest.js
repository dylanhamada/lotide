const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([50, 60], middle([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]));
assertArraysEqual([98], middle([100, "beer", 99, "beer", 98, "beer", 97, "beer", 96]));
assertArraysEqual([], middle(["yin", "yang"]));