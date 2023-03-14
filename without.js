const assertArraysEqual = function(actual,expected){
  if (eqArrays(actual, expected)) {
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

const without = function(source, itemsToRemove){
  for(i = 0; i < source.length; i++) {
    for(j = 0; j < itemsToRemove.length; j++){
      if(source[i] === itemsToRemove[j]){
        source.splice(i,1)
      }
    }  
  }
  return source
}


module.exports = without