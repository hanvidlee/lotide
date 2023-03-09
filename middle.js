const eqArrays = function(first,second) {
  for (let i = 0; i < first.length; i++) {
    if (first[i] === second[i]) {
      return true
    }
  }
  return false
}

const assertArraysEqual = function(actual,expected){
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const middle = function(array) {
  const midPoint = Math.floor(array.length / 2);
  const otherPoint = Math.floor((array.length - 1) / 2);
  if (array.length <= 2){
    return [];
  }
  if (array.length % 2 === 0) {
    return [array[otherPoint], array[midPoint]]
  } else {
    return [array[midPoint]]
  }
} 
console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]