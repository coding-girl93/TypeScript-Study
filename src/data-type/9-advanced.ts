/**
 * 类型推断
 * 1.从右向左推断：定义变量，函数
 * 2.从左向右推断：事件
 */
let a = 123;
let b =[1,'dd']
let c = (x=2)=>x+1

window.onkeydown = (e)=>{
  console.log(e.DOM_KEY_LOCATION_NUMPAD)
}

/**
 * 类型断言
 */
interface Foo{
  name:string
}
interface Foo {
  name: string;
}

let f:Foo = {
  name:'ddd'
}
// let f1 = f as Foo

/**
 * 类型的兼容性 X兼容Y :X(目标类型)=Y（源类型)
 */

let x: string | null = "ddd"
x=null // ts config中配置strictNullChecks

// 接口兼容
interface A{
  a:any,
  b:any 
}

interface B{
  a:any,
  b:any,
  c:any
}

let aa:A = {a:1,b:2}
let bb:B = {a:1,b:2,c:3}
aa = bb
// bb = aa 

/**
 * 函数类型兼容：参数个数
 * 1) 固定参数：参数个数
 * 2）可选参数或者剩余参数
 **/ 
type Handler = (x:number,y:number)=>void

function hoc (h:Handler){
  return h
}
let h1 = (x:number)=>{}
hoc(h1)
let h2 = (x:number,y:number,z:number)=>{}
// hoc(h2) 

/**
 * 可选参数或者剩余参数
 * 1) 固定参数 可以兼容可选参数和剩余参数
 * 2）可选参数 不兼容固定参数和剩余参数  可设置"strictFunctionTypes": false
 * 3）剩余参数 可以兼容固定参数和可选参数  
 */
let fn1 = (x:number,y:number)=>{} 
let fn2 = (x?:number,y?:number,)=>{}
let fn3 = (...args:number[])=>{}
fn1 = fn2
fn1 = fn3
// fn2 = fn1
// fn2 = fn3
fn3 = fn1
fn3 = fn2

/**
 * 函数类型兼容：参数类型
 * 1) 基础类型不兼容
 * 2）对象类型:成员多的兼容成员少的
 **/ 

let h3 = (x:string)=>{}
// hoc(h3)

interface P3D{
  x:number,
  y:number,
  z:number
}
interface P2D{
  x:number,
  y:number,
}

let p3d= (ponit:P3D)=>{}
let p2d=  (ponit:P2D)=>{}
p3d = p2d 
// p2d = p3d 不兼容

/**
 * 函数类型兼容：返回值类型
 * 1) 成员少的兼容成员多的
 * 2）函数重载兼容：实现函数参数<=定义函数的参数
 **/ 

let h4 = ()=>{
  return {x:'12'}
}
let h5 = ()=>{
  return {x:'33',y:'ee'}
}
h4 = h5
// h5=h4

function overload(x:number,y:number):number
function overload(x:string,y:string):number
function overload(x:any,y:any):any{}

// 枚举类型兼容
enum Fruit { APPLE, BANANA, PERSIMMON }
enum Color { RED, GREEN, BLUE }
let fruit : Fruit.APPLE 
let cc:number = Fruit.APPLE

/**
 *  类的兼容
 * 1) 构造函数和静态变量 允许兼容
 * 2）私有变量 不允许兼容
 * 3) 父子类 允许兼容
 */
class AA {
  constructor(x:number,y:number){}
  id:number = 1
  // private name:string = "dd"
}
class BB {
  constructor(x:number){}
  id:number = 2
  static s:string="dd"
}
let aa1:AA = new AA(1,2)
let bb1:BB = new BB(1)
// aa1=bb1
bb1=aa1

class CC extends AA {}
let cc1 = new CC(1,2)
cc1 = aa1
aa1 = cc1

/**
 * 泛型兼容
 */
interface Generic<T>{
  // value:T
}
let o1 :Generic<number> = {}
let o2 :Generic<string> = {}
o1=o2

let log1 = <T>(x:T):T=>{
  return x
}
let log2 = <T>(x:T):T=>{
  return x
}
log1=log2

/**
 * X兼容Y :X(目标类型)=Y（源类型)
 * 结构之间兼容：成员少的兼容成员多的
 * 函数之间兼容：参数多的兼容参数少的
 */