const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++){
    letter = sentence[i]
    if (results[letter]) {
      results[letter].push(i)
    } else {
      results[letter] = [i]
    }
  }
  return results;
}



module.exports = letterPositions