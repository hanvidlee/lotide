const assertArraysEqual = require('../assertArraysEqual')
const assert = require('chai').assert;
const array1 = [1,2,3]
const array2 = [4,5,7]

describe("#assertArraysEqual", () => {
  it("returns false for 'Lighthouse Labs' !== 'Bootcamp'", () => {
    assert.notEqual(assertArraysEqual(array1,array2), true);
  });
  it("returns true for 1 === 1", () => {
    assert.notEqual(assertArraysEqual(array1,array1), false); 
  });
});


// assertArraysEqual(array1,array1)
// assertArraysEqual(array1,array2)