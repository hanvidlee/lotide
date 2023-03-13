
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
module.exports = middle