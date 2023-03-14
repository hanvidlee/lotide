# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @hanvid/lotide`

**Require it:**

`const _ = require('@hanvid/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `eqArrays = function(first,second)`: checks if 2 arrays are equal prints true/false
* `assertEqual = function(actual, expected)`: compares expected vs actual values
* `assertArraysEqual = function(actual,expected)`: compares actual vs expected arrays 
* `assertObjectsEqual = function(actual, expected)`: compares actual vs expected objects
* `countLetters = function(string)`: counts the number of letter 
* `countOnly = function(allItems, itemsToCount)`: returns an object of the count of each key in first parameter
* `eqObjects = function(object1, object2)`: checks if 2 objects are equal prints true/false
* `findKey = function(object, callback)`: checks to see if there is a key in object that matches callback
* `findKeyByValue = function(object, value)`: searches through object and outputs the first key that matches the value parameter
* `head = function (array)`: returns the first index of an array
* `letterPositions = function(sentence)`: returns an object showing which index the letters of the string is placed.
* `map = function(array, callback)`: creates a new array using a callback function that affects each value of the array
* `middle = function(array)`: returns a new array of the mid point value of the array and if it is an even length then print the middle two
* `tail = function(array)`: returns all the values in the array except the first index
* `takeUntil = function(array, callback)`: copies array until value matches callback
* `without = function(source, itemsToRemove)`: copies the array as a new array without the values in the itemsToRemove parameter