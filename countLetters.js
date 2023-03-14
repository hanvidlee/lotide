const countLetters = function(string) {
  let countOfLetter = {}
  for(const letter of string) {
    if(countOfLetter[letter]) {
      countOfLetter[letter] += 1
    } else {
      countOfLetter[letter] = 1
    }
  }
  return countOfLetter
}


module.exports = countLetters