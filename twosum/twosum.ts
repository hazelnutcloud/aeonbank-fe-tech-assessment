export function twoSum(numbers: number[], target: number): [number, number] {
  const indexMap: Record<number, number> = {}

  for (const [index, number] of numbers.entries()) {
    const balance = target - number;
    if (indexMap[balance] !== undefined) {
     return [indexMap[balance] + 1, index + 1]
    }
    indexMap[number] = index
  }

  throw new Error("no solution found")
}
