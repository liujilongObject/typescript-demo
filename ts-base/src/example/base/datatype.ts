// 原始类型
let b: boolean = false
let num: number | undefined | null = 111
let str: string = 'aaa'
// str = 2

// 数组
let arr1: number[] = [1, 2]
let arr2: Array<number> = [1, 2]
let arr3: Array<number | string> = [1, 2, 'c']  // 联合类型

/**
 * 元组
 * 合并了不同类型的对象
 * 当添加越界的元素时，它的类型会被限制为元组中每个类型的联合类型
 */
let tuple: [number, string, boolean] = [1, 'a', false]
// tuple.push({})
tuple.push('bbb')
// console.log(tuple)
// tips: 元组可添加越界元素，但仍不能越界访问
// tuple[3]

// 函数
let sum = (x: number, y: number) => x + y
let compute: (x: number, y: number) => number
compute = (a, b) => a + b

// 对象
let obj: {x: number, y: string} = {x: 1, y: 'obj'}
obj.x = 222

// symbol
let s1: symbol = Symbol()
let s2: symbol = Symbol()
console.log(s1 === s2, 'symbol')

// undefined, null
let un: undefined = undefined
let nu: null = null
// num = undefined
// num = null

// void: 没有任何返回值的类型，确保返回undefined
let noReturn = () => {}

// never: 永远不会有返回值的类型
// 例如抛出异常的函数、死循环
let error = () => {
  throw new Error('error')
}
