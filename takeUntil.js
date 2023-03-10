const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const takeUntil = function(array, callback) {
  const result = []
  for (const item of array) {
    if (callback(item)) {
      return result;
    }
    result.push(item)
  }
  return result;
}

const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(first,second) {
  if (first.length !== second.length) {
    return false
  }
  
  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false
    }
  }
  return true
}
const assertArraysEqual = function(actual,expected){
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertArraysEqual(results1,[ 1, 2, 5, 7, 2 ])
