function add2(x: number = 2, y?: number) {
  return y ? x + y : x
}
// console.log(add2())

function add3(x: number, ...rest: number[]) {
  return x + rest.reduce((prev, cur) => prev + cur)
}
// console.log(add3(1, 9, 5, 6))

// 函数重载
function testReload(...rest: number[]): number
function testReload(...rest: string[]): string
function testReload(...rest: any[]): any {
  let first = rest[0]
  if (typeof first === 'string') {
    return rest.join('')
  }
  if (typeof first === 'number') {
    return rest.reduce((prev, cur) => prev + cur)
  }
}
// console.log(testReload(1, 2, 4), testReload('a', 'b', 'c'))
