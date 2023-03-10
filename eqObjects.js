const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
};


const eqObjects = function(object1, object2) {
  const key1 = Object.keys(object1);
  const key2 = Object.keys(object2);
  if (key1.length !== key2.length) {
    return false;
  }
  for (const key of key1) {
    const val1 = object1[key];
    const val2 = object2[key];

    if(Array.isArray(val1)) {
      if (!eqArrays(val1, val2)) {
        return false;
      }
    }
    if (val1 !== val2) {
      return false;
    }
  }
  return true;
};


module.exports = eqObjects