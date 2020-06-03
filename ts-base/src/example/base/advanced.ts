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


/**
 * 映射类型
 * 本质上是预先定义的泛型接口，通常会结合索引类型获取对象的属性或属性值，来讲一个对象映射成我们想要的结构
 */
interface MapObj {
  a: string
  b: number
  c: boolean
}
// ts 内置映射类型
type ReadonlyMapObj = Readonly<MapObj>

type PickMapObj = Pick<MapObj, 'a' | 'c'>

type RecordMapObj = Record<'x' | 'y', MapObj>


/**
 * 条件类型
 * T extends U ? X : Y
 */
type TypeName<T> = 
  T extends string ? 'string' :
  T extends number ? 'number' :
  T extends boolean ? 'boolean' :
  T extends undefined ? 'undefined' :
  T extends Function ? 'function' :
  'object';

type T1 = TypeName<string>
type T2 = TypeName<string[]>

// (A | B) extends U ? X : Y
// (A extends U ? X : Y) | (B extends U ? X : Y)
type T3 = TypeName<string | number>

type Diff<T, U> = T extends U ? never : T

/* ts 内置条件类型 */
// Extract from T those types that are assignable to U
type T4 = Extract<'a' | 'b' | 'c', 'a' | 'e'>
// Exclude from T those types that are assignable to U
type T5 = Exclude<'a' | 'b' | 'c', 'a' | 'e'>

// ReturnType<T>
type T6 = ReturnType<() => string | number>
