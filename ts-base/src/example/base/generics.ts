/**
 * 泛型
 */
// 泛型函数
function log<T>(value: T): T {
  console.log(value)
  return value
}
// log<string[]>(['a', 'b'])
// log([1, 2])

// type Log = <T>(value: T) => T
// let myLog: Log = log
// myLog({ message: 'logs' })

// 泛型接口
interface Log<T = string> {
  <T>(value: T): T
}

// let myLog: Log = log
// myLog({ myLog: 'myLog' })

// 泛型类
class LogC<T> {
  run(value: T) {
    console.log(value)
    return value
  }
}
let log1 = new LogC<number>()
// log1.run(1)

let log2 = new LogC()
// log2.run({ info: 'test' })


interface Length {
  length: number
}

function logB<T extends Length>(value: T): T {
  console.log(value, value.length)
  return value
}
// logB([1, 3])
// logB('')
// logB({length: 0})

/**
 * tips：使用泛型带来的好处
 * 函数和类可轻松支持多种类型；
 * 不需要写多条函数重载，不必写过多的联合类型声明；
 * 灵活控制类型之间的约束；
 */
