// You must RETURN your result in each function!
printNums([1, 2, 3, 4])
function printNums(nums) {
  const printNumbers = nums.forEach((number) => {
    return number
  })
  /**
   *  Using .forEach, add each number in the nums array to a new array.
   * @param nums => [1,2,3,4]
   */
}
returnSums([1, 2, 3, 4, 5])
function returnSums(nums) {
  nums.forEach((num, index) => {
    //num + num[i]
    let result = num + index
    return result
  })
  /**
   * Using forEach, push the sum of n plus the index
   * to a new array and return the new array
   * @param nums => [1,2,3,4,5]
   */
}
returnTotal([{ n: 1 }, { n: 2 }])
function returnTotal(objs) {
  let sum = 0
  const sumObj = objs.forEach((obj) => {
    sum += obj.n
  })
  return sum
  /**
   * Using forEach return a number that is the total sum of all numbers in the array of objects.
   * The key for each object will be n
   * @param objs => [{n:1}]
   */
}

printMoney([2.3, 2.4, 32.99])
function printMoney(decimals) {
  const addElem = decimals.map((a) => {
    let string = a.toString()
    let newPrice = '$' + string
    return newPrice
  })
  /**
   * @param decimals => [2.30, 2.40, 32.99]
   * Using .map, return an array of decimals formatted as dollars.
   * EX: {
   * input: [12.34, 9.99],
   * output: ['$12.34', '$9.99']
   * }
   * Hint: Not all decimals have two places, make sure to return each decimal with the proper decimal places. .toFixed may be useful :)
   */
}
returnAllTrueValues([{ name: 'Beth', happy: true }])

function returnAllTrueValues(values) {
  const happy = values.filter((param) => {
    if (param.happy === true) {
      return param
    }
  })
  return happy

  /**
   * @param values => [{name: 'Joe', happy:false}]
   * Using .filter, return an array of objects where happy equals true
   */
}

const nums = [1, 2, 3, 4]

function addTwo(nums) {
  const sum = nums.reduce((a, b) => {
    return a + b
  }, 2)
  return sum
}
/**
 * @param nums => [1,2,3,4]
 * Using .reduce, return the total sum of all numbers.
 * Each number should have 2 added to it.
 */
//   3
//   4 => 7

const strings = ['h', 'e', 'l', 'l', 'o']

function joinStrings(strings) {
  const oneString = strings.reduce((a, b) => {
    let string = ' '
    string = a + b
    return string
  }, 0)
  /**
   * @param strings => ['g', 'f', 'z']
   * Using .reduce, return a new string containing each string from the strings array.
   */
}

//Bonus
function sortObjectsByValue(objs) {
  /**
   * @param objs => [{value: 1}, {value:2}, {value:23}]
   * Using .sort, sort the array of objects by the value key in ascending order
   * .sort documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
   */
}

module.exports = {
  printNums,
  returnSums,
  returnTotal,
  printMoney,
  returnAllTrueValues,
  sortObjectsByValue,
  addTwo,
  joinStrings
}
