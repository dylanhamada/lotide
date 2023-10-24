const countLetters = require("../countLetters");
const assert = require("chai").assert;

const letterCount = {
  r: 3,
  o: 1,
  s: 2,
  e: 3,
  a: 1,
  d: 1
};
const result = countLetters("roses are red");

describe("#countLetters", () => {
  it("returns 3 for \'r\'", () => {
    assert.equal(result.r, letterCount.r);
  });

  it("returns 1 for \'a\'", () => {
    assert.equal(result.a, letterCount.a);
  });

  it("returns 2 for \'s\'", () => {
    assert.equal(result.s, letterCount.s);
  });
});