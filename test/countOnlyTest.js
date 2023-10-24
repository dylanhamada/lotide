const countOnly = require("../countOnly");
const assert = require("chai").assert;

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

console.log(result["Karima"]);

describe("#countOnly", () => {
  it("returns 2 for Fang", () => {
    assert(result["Fang"], 2);
  });

  it("returns 1 for Jason", () => {
    assert(result["Jason"], 1);
  });
});