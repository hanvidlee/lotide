const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(first,second) {
  for (let i = 0; i < first.length; i++) {
    if (first[i] === second[i]) {
      return true
    }
  }
  return false
}
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)