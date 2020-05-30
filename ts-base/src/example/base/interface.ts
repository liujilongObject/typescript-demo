// 接口定义对象
interface List {
  readonly id: number;
  name: string;
  age?: number;
  [x: string]: any;
}

interface Result {
  data: List[]
}

function render(result: Result) {
  result.data.forEach(element => {
    console.log(element.id, element.name)
  })
}

let result: Result = {
  data: [
    { id: 1, name: 'pig' },
    { id: 2, name: 'cat' }
  ]
}

// render(result)

interface StringArray {
  [index: number]: string
}

let chars: StringArray = ['A', 'B']
// console.log(chars)

let chars2: StringArray = {
  1: 'AAA',
  2: 'BBB'
}
// console.log(chars2)

// 接口定义函数
let add: (x: number, y: number) => number

interface Add {
  (x: number, y: number): number
}

type Add2 = (x: number, y: number) => number


interface Lib {
  (): void;
  version: string;
  doSomething(): void;
}

function createLib() {
  let lib: Lib = (() => {}) as Lib
  lib.version = '1.0.0'
  lib.doSomething = () => {}
  return lib
}

let lib = createLib()
lib.doSomething()

/**
 * 类实现接口
 * 接口只能约束类的公有成员
 */
interface Human {
  name: string;
  eat(): void;
}

class Yn implements Human {
  constructor(public name: string) {
    this.name = name
  }

  eat() {}

  sleep() {}
}

/**
 * 接口的继承
 */
interface Man extends Human {
  run(): void
}

interface Child {
  cry(): void
}

// 接口继承多个接口
interface Boy extends Man, Child {}

let boy: Boy = {
  name: '',
  run() {},
  eat() {},
  cry() {}
}

/**
 * 接口继承类
 * 接口在抽离类的成员时，会抽离公有成员(public)、私有成员(private)、受保护成员(protected)
 */
class Auto {
  state: number = 1;
  // private action = 0;
}

interface AutoInterface extends Auto {}

class V implements AutoInterface {
  state = 2
}

class Bus extends Auto implements AutoInterface {}
// console.log(new Bus())

