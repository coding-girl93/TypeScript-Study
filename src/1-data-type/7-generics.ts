/**
 * 泛型
 * 1. 泛型的概念：
 * 2. 实现方案
 *    （1）函数重载
 *    （2）联合类型
 *     (3) any 类型
 *     (4) 泛型类
 * 3.泛型的好处
 *    （1）函数和类可以轻松地支持多种类型，增强程序的扩展性
 *    （2）不必写多条函数重载，冗长的联合类型声明，增强代码可读性
 *     (3)灵活控制类型之间的约束
 */

function log<T>(arg: T): T {
  console.log(arg)
  return arg
}
// log<string>('ddd')
log('ddd')

/**
 * 定义函数类型
 */

// type Log =<T>(value:T)=>T
// let myLog:Log = log

/**
 * 定义属性
 */
interface Log<T>{
  (value:T):T
}
let myLog:Log<number> = log
myLog(1)

/**
 * 定义泛型类
 */

class A<T>{
  say(value:T):T{
    console.log(value)
    return value
  }
}
// let a = new A<number>()
// // a.say('dd'
// a.say(1)

let a = new A()
a.say('dd')
a.say({})

/**
 * 定义泛型约束
 */
interface Length{
  length:number
}
function log1<T extends Length>(arg:T):T{
  console.log(arg.length)
  return arg
}
log1([1,2])
log1('ddd')
log1({length:1})