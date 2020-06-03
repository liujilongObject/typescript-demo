/**
 * 交叉类型
 * 去所有类型的并集
 */
interface DogI {
  run(): void
}

interface CatI {
  jump(): void
}

let pet: DogI & CatI = {
  run() {},
  jump() {}
}

/**
 * 联合类型
 */
let a: number | string = 'a'
let testB: 'a' | 'b' | 'c'
testB = 'a'
// testB = 'ff' // error


interface Square {
  kind: 'square'
  size: number
}
interface Rectangle {
  kind: 'rectangle'
  width: number
  height: number
}
interface Circle {
  kind: 'circle'
  r: number
}
type Shape = Square | Rectangle | Circle

function area(s: Shape) {
  switch(s.kind) {
    case 'square':
      return s.size ** 2
    case 'rectangle':
      return s.width * s.height
    case 'circle':
      return Math.PI * s.r ** 2
    default:
      return ((e: never) => {throw new Error(e)})(s)
  }
}

console.log(area({ kind: 'circle', r: 1 }))

/**
 * 索引类型
 */
// keyof T
interface Obj {
  a: number,
  b: string
}
let key: keyof Obj

// T[k]
let value: Obj['a']

function getValues<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
  return keys.map(key => obj[key])
}
const testObj = {
  a: 1,
  b: 2,
  c: 3
}
console.log(getValues(testObj, ['a', 'b']))
// console.log(getValues(testObj, ['e', 'f'])) // error
