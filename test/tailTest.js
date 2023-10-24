const tail = require('../tail');
const assert = require("chai").assert;

const words = ["Yo Yo", "Lighthouse", "Labs"];
const nums = [2, 3, 6, 9, 12];

describe("#tail", () => {
  it("returns [Lighthouse, Labs] for [Yo Yo, Lighthouse, Labs]", () => {
    assert.deepEqual(tail(words), ["Lighthouse", "Labs"]);
  });
  
  it("returns [3, 6, 9, 12] for [2, 3, 6, 9, 12]", () => {
    assert.deepEqual(tail(nums), [3, 6, 9, 12]);
  });
});