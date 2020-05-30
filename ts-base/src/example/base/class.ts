class Dog {
  /**
   * 当构造函数修饰为 private 时，该类不允许被继承或者实例化
   * 当构造函数修饰为 protected 时，该类只允许被继承
   */
  constructor(name: string) {
    this.name = name
  }

  // 类的成员默认public
  public name: string = 'dog'

  run() {}

  // 私有属性，仅可在当前类中调用
  private pri() {}

  // 受保护成员，只能在类或子类中访问
  protected pro() {}
  
  // 只读属性必须被初始化
  readonly legs: number = 4

  // 静态成员，只能通过类名调用（可以被子类继承）
  static food: string = 'meat'
}
// 类成员的属性或方法都是实例的属性或方法，不是原型属性或方法
// console.log(Dog.prototype)
// console.log(Dog.food)
let dog = new Dog('durain')
// console.log(dog)

class Husky extends Dog {
  constructor(name: string, public color: string) {
    super(name)
    this.color = color
  }

  // color: string
}
// console.log(Husky.food)

// 抽象类: 只能被继承，不能被实例化
abstract class Animal {
  eat() {
    console.log('eat')
  }

  // 抽象类中的抽象方法必须在子类中被实现
  abstract sleep(): void
}

class Cat extends Animal {
  constructor( name: string) {
    super()
    this.name = name
  }

  name: string

  sleep() {
    console.log('cat sleep')
  }
}
let cat = new Cat('miao')
// cat.eat()

class Goat extends Animal {
  sleep() {
    console.log('goat sleep')
  }
}
let goat = new Goat()

let animals: Animal[] = [cat, goat]
animals.forEach(item => {
  // item.sleep()
})

// 类的成员方法可直接返回this，实现链式调用
class WorkFlow {
  step1() {
    console.log(this, 'step1')
    return this
  }

  step2() {
    console.log(this, 'step2')
    return this
  }
}
new WorkFlow().step1().step2()

// 子类返回this可直接调用父类方法
class SubFlow extends WorkFlow {
  next() {
    console.log(this, 'SubFlow next')
    return this
  }
}
new SubFlow().next().step1().next()

// tips: 根本原因是通过原型链实现的继承，调用方法时依据原型链逐级向上查找;