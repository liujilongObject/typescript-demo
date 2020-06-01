/**
 * 类型推断
 */
interface Foo {
  bar: number
}
// 类型断言，当你明确知道这个数据是某种类型时使用。
let foo = {} as Foo

/**
 * 接口兼容性:
 * 源类型具备目标类型上的所有必要属性时，源类型可以赋值给目标类型。
 */
interface A {
  a: number
}

interface B {
  a: number;
  b: number;
}

let x: A = { a: 1 }
let y: B = { a: 1, b: 2 }
x = y
// y = x // error

/**
 * 函数兼容性
 */
type Handler = (a: number, b: number) => void
function hoc(handler: Handler) {
  return handler
}

// 1)参数个数: 参数多的兼容参数少的
let handler1 = (a: number) => { }
hoc(handler1)

let handler2 = (a: number, b: number, c: number) => { }
// hoc(handler2) // error


/**
 * 枚举兼容性
 * 枚举类型与number类型可兼容
 * 枚举类型与枚举类型间不兼容
 */
enum Fruit {
  Apple,
  Banana
}
enum Color {
  Red,
  Pink
}
let fruit: Fruit.Apple = 3
let no: number = Fruit.Apple
// let color: Color.Red = Fruit.Apple // error

/**
 * 类的兼容
 * 构造函数、静态成员不参与比较
 * 当两个类中含有相同的私有成员时，两个类的实例不兼容，子类与父类的实例可兼容
 */


/**
 * tips
 * 结构之间兼容：成员少的兼容成员多的
 * 函数之间兼容：参数多的兼容参数少的
 */



/**
* 类型保护
* ts能够在特定的区块中保证变量属于某种确定的类型
* 可以在此区块中引用此类型的属性或调用此类型的方法
*/
enum Type { Strong, Weak }

class Java {
  helloJava() {
    console.log('java --')
  }
  java: any
}

class JavaScript {
  helloJavaScript() {
    console.log('JavaScript --')
  }
  js: any
}

// 类型谓词
function isJs (lang: Java | JavaScript): lang is JavaScript {
  return (lang as JavaScript).helloJavaScript !== undefined
}

function getLanguage(type: Type, x: string | number) {
  let lang = type === Type.Strong ? new Java() : new JavaScript()

  // 类型断言
  // if ((lang as Java).helloJava) {
  //   (lang as Java).helloJava()
  // } else {
  //   (lang as JavaScript).helloJavaScript()
  // }

  // instanceof
  // if (lang instanceof Java) {
  //   lang.helloJava()
  // } else {
  //   lang.helloJavaScript()
  // }

  // in
  // if ('java' in lang) {
  //   lang.helloJava()
  // } else {
  //   lang.helloJavaScript()
  // }

  // typeof
  // if (typeof x === 'string') {
  //   console.log(x.length)
  // } else {
  //   console.log(x.toFixed(2))
  // }

  // 类型保护函数
  if (isJs(lang)) {
    lang.helloJavaScript()
  } else {
    lang.helloJava()
  }

  return lang
}

getLanguage(Type.Weak, 'abc')
