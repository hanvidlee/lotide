const middle = require ('../middle')
const assertArraysEqual = require('../assertArraysEqual')
const assert = require('chai').assert;


describe("#middle", () => {
  it("returns 2 for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns [] for ['5']", () => {
    assert.deepEqual(middle(['5']), []); 
  });
});



console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]

assertArraysEqual(middle([1, 2, 3]),(middle([1,2,2,2,3])))