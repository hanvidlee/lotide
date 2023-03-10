const findKeyByValue = function(object, value) {
  let result = undefined;
  for(const key in object) {
    if(object[key] === value){
      result = key;
    }
  }
  return result
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};



const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");