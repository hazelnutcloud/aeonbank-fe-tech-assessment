import { test, expect } from "bun:test"
import { twoSum } from "./twosum"

test("twoSum", () => {
  let numbers = [4, 11, 17, 25]
  let target = 21
  let indices = twoSum(numbers, target)
  console.log("numbers:", numbers)
  console.log("target:", target)
  console.log("result", indices)
  expect(indices[0]).toBe(1)
  expect(indices[1]).toBe(3)

  numbers = [0, 1, 2, 2, 3, 5]
  target = 4
  indices = twoSum(numbers, target)
  console.log("numbers:", numbers)
  console.log("target:", target)
  console.log("result", indices)
  expect(indices[0]).toBe(3)
  expect(indices[1]).toBe(4)

  numbers = [-1, 0]
  target = -1
  indices = twoSum(numbers, target)
  console.log("numbers:", numbers)
  console.log("target:", target)
  console.log("result", indices)
  expect(indices[0]).toBe(1)
  expect(indices[1]).toBe(2)
})
