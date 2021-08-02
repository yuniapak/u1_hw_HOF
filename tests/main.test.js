const functions = require('../solution')

test('Returns  All Numbers', () => {
  let nums = [1, 2, 3, 4]
  const d = functions.printNums(nums)
  //   console.log(`INPUT => ${nums}`)
  //   console.log(`YOUR OUTPUT => ${d}`)
  expect(d).toEqual(nums)
})

test('Returns an array of  sums of all n values plus the index', () => {
  let totals = [1, 5, 7]
  let nums = [1, 4, 5]
  const d = functions.returnSums(nums)
  //   console.log(`INPUT => ${totals}`)
  //   console.log(`YOUR OUTPUT => ${d}`)
  expect(d).toEqual(totals)
})

test('Returns the sum of all obj[n] ', () => {
  let nums = [{ n: 1 }, { n: 2 }, { n: 7 }]
  let sum = 10
  const d = functions.returnTotal(nums)
  //   console.log(`INPUT => ${JSON.stringify(nums)}`)
  //   console.log(`OUTPUT => ${d}`)
  expect(d).toBe(sum)
})

test('Returns an array where each value has $ on the front', () => {
  let dollars = [13.99, 99.99, 32.99, 40.0]
  let values = [`$13.99`, `$99.99`, `$32.99`, `$40.00`]
  const d = functions.printMoney(dollars)
  //   console.log(`INPUT => ${dollars}`)
  //   console.log(`YOUR OUTPUT => ${d}`)
  expect(d).toEqual(values)
})

test('Returns an array where every happy item is true', () => {
  const items = [
    { name: 'Joe', happy: false },
    { name: 'Beth', happy: true },
    { name: 'Ruth', happy: true },
    { name: 'Bob', happy: false },
    { name: 'Kev', happy: false },
    { name: 'Becky', happy: true }
  ]
  let rValues = [
    { name: 'Beth', happy: true },
    { name: 'Ruth', happy: true },
    { name: 'Becky', happy: true }
  ]
  const d = functions.returnAllTrueValues(items)
  //   console.log(`INPUT => ${JSON.stringify(items)}`)
  //   console.log(`YOUR OUTPUT => ${JSON.stringify(d)}`)
  expect(d).toEqual(rValues)
})

test('Returns an array with every n number + 2', () => {
  let nums = [1, 2, 3, 4]
  const d = functions.addTwo(nums)
  //   console.log(`INPUT => ${nums}`)
  //   console.log(`YOUR OUTPUT => ${d}`)
  expect(d).toBe(18)
})

test('Returns a new string with each string added to the end', () => {
  const strings = ['h', 'e', 'l', 'l', 'o']
  const d = functions.joinStrings(strings)
  //   console.log(`INPUT => ${strings}`)
  //   console.log(`YOUR OUTPUT => ${d}`)
  expect(d).toEqual('hello')
})

test('Returns an array with the sorted items in ascending order', () => {
  const items = [
    { value: 23 },
    { value: 3 },
    { value: 54 },
    { value: 22 },
    { value: 100 }
  ]
  let rValues = [
    { value: 3 },
    { value: 22 },
    { value: 23 },
    { value: 54 },
    { value: 100 }
  ]
  const d = functions.sortObjectsByValue(items)
  expect(d).toEqual(rValues)
})
