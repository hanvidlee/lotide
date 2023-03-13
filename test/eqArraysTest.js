const eqArrays = require('../eqArrays')
const assertEqual = require('../assertEqual')
const assert = require('chai').assert;

describe("#eqArrays", () => {
  it("returns true for [1, 2, 3] === [1, 2, 3]", () => {
    assert.strictEqual(eqArrays([1, 2, 3],[1, 2, 3]), true);
  });
  it("returns false for ['5'] === ['6']", () => {
    assert.strictEqual(eqArrays(['5'], ['6']), false); 
  });
});

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)