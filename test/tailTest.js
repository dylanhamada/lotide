const tail = require('../tail');
const assertEqual = require('../assertEqual');

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(tail(words)[0], words[1]);
assertEqual(tail(words).length, words.length - 1);
assertEqual(tail([1]), []);