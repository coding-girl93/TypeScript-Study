/**
 * 定义函数
 * 1. 函数名
 * 2. interface
 * 3. type 类型别名
 */

let add1: (x:number,y:number)=>number
//  add1 = (a,b)=>a+b
//  add1(1,2)

// interface Add {
//   (x:number,y:number):number
// }
// let add2:Add = (a,b)=>a+b
// add2(1,2)


type Add = (x:number,y:number)=>number
let add3:Add = (a,b)=>a+b
add3(1,3)

/**
 * 混合接口：属性和方法
 */
interface Person {
  ():void,
  name:string,
  age:number,
  say():void
}

// 单例模式
function initPerson(){
  let p : Person = (()=>{}) as Person // 类型断言
  p.age=10
  p.name="aaa"
  p.say=()=>{}
  return p
}
