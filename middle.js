const assertArraysEqual = require('./assertArraysEqual');

const middle = (arr) => {
  // if array length is 1-2, return empty array
  if (arr.length < 3) return [];
  // if array length is odd, return array consisting of one middle element
  if (arr.length % 2 !== 0) {
    return [arr[((arr.length + 1) / 2) - 1]];
  }
  // otherwise, array length is even, return array consisting of two middle elements
  return [arr[(arr.length / 2) - 1], arr[arr.length / 2]];
};

module.exports = middle;