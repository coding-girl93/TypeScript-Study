/**
 * 1. 类的属性在实例上，不在原型上
 * 2. 类的属性需要初始化：构造函数中初始化 或者  声明时初始化
 */
class Dog {
  constructor(name:string){
    this.name = name
  }
  name:string
  private age:number = 1 // 不能被继承 不能被实例化
  protected breed:string = 'husky' // 受保护属性 只能在子类中访问 不能被实例化
  readonly weight:number = 10 // 只读属性 不能被实例化
  static h:number = 5 // 静态属性 只能通过类名调用 Husky.h ,不能通过实例调用，可以被继承
  run(){}
}

/**
 * 类的继承 
 */

class Husky extends Dog {
  constructor(public name:string){ 
    super(name) // 调用父类的构造函数
  }
  public color:string = 'white' // 公有属性

}

/**
 * 抽象类 抽离公有属性 实现多态
 * 1. 只能被继承 不能被实例化
 */
abstract class Animal {
  eat(){
    console.log('eat')
  }
  abstract sleep():void // 抽象方法
}

class  Cat extends Animal {
  constructor(name:string){
    super()
    this.name = name
  }
  name:string
  run(){}
  sleep(){
    console.log('cat sleep')
  }
}
let cat = new Cat('cat')
cat.eat()

class  Bird extends Animal {
  sleep(){
    console.log('bird sleep')
  }
}

// 实现多态
let animals:Animal[] = [new Cat('cat'), new Bird()]
animals.forEach(a=>{
  a.sleep()
})

// 方法的链式调用
class WorkFlow{
  step1(){
    console.log('step1')
    return this
  }
  step2(){
    console.log('step2')
    return this
  }
}
let wf = new WorkFlow()
wf.step1().step2()

class MyFlow extends WorkFlow {
  next(){
    return this
  }
}
let mf = new MyFlow()
mf.step1().next().step2().next()