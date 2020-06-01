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
