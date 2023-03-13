const assertArraysEqual = require('../assertArraysEqual')

const array1 = [1,2,3]
const array2 = [4,5,7]

assertArraysEqual(array1,array1)
assertArraysEqual(array1,array2)