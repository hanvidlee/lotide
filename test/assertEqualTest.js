const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

describe("#assertEqual", () => {
  it("returns false for 'Lighthouse Labs' !== 'Bootcamp'", () => {
    assert.notEqual(assertEqual("Lighthouse Labs", "Bootcamp"), true);
  });
  it("returns true for 1 === 1", () => {
    assert.notEqual(assertEqual(1, 1), false); 
  });
});


// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);