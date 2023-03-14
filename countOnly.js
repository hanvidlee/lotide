const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countOnly = function(allItems, itemsToCount) {
  // result = ""
  // for(let i = 0; i < allItems.length; i++) {
  //   for(var person in itemsToCount) {
  //     if(itemsToCount.hasOwnProperty(allItems[i])){

  //     }
  //   }
  // }
  const results = {}
  for (const item of allItems) {
    if (itemsToCount[item]){
    if (results[item]) {
      results[item] += 1;
    } else {
      results[item] = 1;
    }
  }
  }
  
return results;
}

// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });


module.exports = countOnly;