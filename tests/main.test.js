const functions = require('../solution')

describe('printNums', () => {
  it('should ', () => {
    let nums = [1, 2, 3, 4]
    const d = functions.printNums(nums)
    //   console.log(`INPUT => ${nums}`)
    //   console.log(`YOUR OUTPUT => ${d}`)
    expect(d).toEqual(nums)
  })
})
describe('returnSums', () => {
  it('should return an array of sums for all n values plus the index ', () => {
    let totals = [1, 5, 7]
    let nums = [1, 4, 5]
    const d = functions.returnSums(nums)
    //   console.log(`INPUT => ${totals}`)
    //   console.log(`YOUR OUTPUT => ${d}`)
    expect(d).toEqual(totals)
  })
})
describe('returnTotal', () => {
  it('should return a new array with the total sum of all numbers in each object', () => {
    let nums = [{ n: 1 }, { n: 2 }, { n: 7 }]
    let sum = 10
    const d = functions.returnTotal(nums)
    //   console.log(`INPUT => ${JSON.stringify(nums)}`)
    //   console.log(`OUTPUT => ${d}`)
    expect(d).toBe(sum)
  })
})
describe('printMoney', () => {
  it('should return an array of all decimals formatted as dollars', () => {
    let dollars = [13.99, 99.99, 32.99, 40.0]
    let values = [`$13.99`, `$99.99`, `$32.99`, `$40.00`]
    const d = functions.printMoney(dollars)
    //   console.log(`INPUT => ${dollars}`)
    //   console.log(`YOUR OUTPUT => ${d}`)
    expect(d).toEqual(values)
  })
})
describe('returnAllTrueValues', () => {
  it('should return an array of objects where happy === true', () => {
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
})
describe('addTwo', () => {
  it('should return the total sum of each number + 2', () => {
    let nums = [1, 2, 3, 4]
    const d = functions.addTwo(nums)
    //   console.log(`INPUT => ${nums}`)
    //   console.log(`YOUR OUTPUT => ${d}`)
    expect(d).toBe(18)
  })
})
describe('joinStrings', () => {
  it('should return a new string with each character in the provided array', () => {
    const strings = ['h', 'e', 'l', 'l', 'o']
    const d = functions.joinStrings(strings)
    //   console.log(`INPUT => ${strings}`)
    //   console.log(`YOUR OUTPUT => ${d}`)
    expect(d).toEqual('hello')
  })
})

// Bonus
describe('sortObjectsByValue', () => {
  it('should sort the array of objects by the value key in ascending order', () => {
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
})
