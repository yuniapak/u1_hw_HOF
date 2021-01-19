// Use .forEach for the following functions

function printNums(nums) {
  /**
   *  Using .forEach, Return a new array containing  all of the numbers in nums array
   * @param nums => [1,2,3,4]
   */
}

function returnSums(nums) {
  /**
   * Using forEach, push the sum of n plus the index
   * to a new array and return the array
   * @param nums => [1,2,3,4,5]
   */
}

function returnTotal(objs) {
  /**
   * Using forEach return the total sum of all numbers in the array of objects.
   * The key for each number will be n
   * @param objs => [{n:1}]
   */
}

//Use .map for the following functions

function printMoney(decimals) {
  /**
   * @param decimals => [2.30, 2.40, 32.99]
   * Using .map, return an array of decimals formatted as dollars.
   * EX: {
   * input: [12.34, 9.99],
   * output: ['$12.34', '$9.99']
   * }
   * Hint: Not all decimals have two places, make sure to return each decimal with the proper decimal places
   */
}

function createObject(words) {
  /**
   * @param words => ['Happy', 'Sad', 'Winky']
   * Using .map, return an array of objects containing the lowercased word plus an emoji,
   * the key should be the lowercased word and the value should be the emoji
   * EX: {
   * input: ['Happy'],
   * output: [{ happy: =)' }]
   * }
   */
}

// Use .filter for the following functions

function returnAllTrueValues(values) {
  /**
   * @param values => [{name: 'Joe', happy:false}]
   * Using .filter, return an array of objects where happy equals true
   */
}

// Use .sort for the following functions

function sortObjectsByValue(objs) {
  /**
   * @param objs => [{value: 1}, {value:2}, {value:23}]
   * Using .sort, sort the array of objects by the value key in ascending order
   */
}

function sortLetters(letters) {
  /**
   * @param letters => ['a', 'f', 'e', 'z']
   * Using .sort, sort the array of letters in descending order
   */
}

// Use .reduce for the following functions

function addTwo(nums) {
  /**
   * @param nums => [1,2,3,4]
   * Using .reduce, return the total sum of all numbers with  each number + 2.
   */
  //   3
  //   4 => 7
}

function joinStrings(strings) {
  /**
   * @param strings => ['g', 'f', 'z']
   * Using .reduce, return a new string containing each string from the strings array.
   */
}

module.exports = {
  printNums,
  returnSums,
  returnTotal,
  printMoney,
  createObject,
  returnAllTrueValues,
  sortObjectsByValue,
  sortLetters,
  addTwo,
  joinStrings
}
