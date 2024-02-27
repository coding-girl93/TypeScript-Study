/**
 * 高级类型
 * 1）交叉类型 取类型的并集 A&B
 * 2）联合类型 类型不确定可以取类型中的一个类型 A|B
 * 3) 字面量联合类型
 * 4) 对象联合类型：只能选择类型交集
 */

interface DogInterface{
  run():void
}
interface CatInterface{
  jump():void
}

let pet:DogInterface & CatInterface  // 交叉类型 取类型的并集

class Dog implements DogInterface{
  run(){}
  eat(){}
}

class Cat implements CatInterface{
  jump(){}
  eat(){}
}
enum Child{ BOY,GIRl }

function getPet(child:Child){
  let pet = child == Child.BOY ? new Dog() : new Cat()
  pet.eat() // 只能选择类型交集
  return pet
}

let a :string|number 
let b :"1"|"ds"|'dd' // 字面量联合类型



interface Square {
  type: "square"
  size:number
}
interface Rectangle {
  type: "rectangle"
  width:number
  height:number
}
interface Circle {
  type: "circle",
  r:number
}
type Shape = Square | Rectangle | Circle

/**
 * 一旦扩展Shape类型 ，area方法就会被遗漏
 * 1）增加返回值类型
 * @param s 
 * @returns 
 */
// function area(s:Shape):number{
//   switch(s.type){
//     case "square":  
//       return s.size * s.size
//     case "rectangle":
//       return s.width * s.height
//     case "circle":
//         return s.r * s.r*3.14
//   }
// }

function area(s:Shape):number{
  switch(s.type){
    case "square":  
      return s.size * s.size
    case "rectangle":
      return s.width * s.height
    case "circle":
        return s.r**2*Math.PI
    default:
      return ((e:never)=>{throw new Error("e")})(s)
  }
}
/**
 * 索引类型
 */

let obj ={
  a:1,
  b:2,
  c:3
}
// function getValues(obj:any,keys:string[]){
//   return keys.map(key=>obj[key])
// }
// console.error(getValues(obj,["a","b","c"]))// [1,2,3]
// console.log(getValues(obj,["d","f"]))// [undefined,undefined]

// keyof T 返回T的所有属性名
interface Obj{
  a:number
  b:string
}
let key :keyof Obj
// T[K] 返回K的类型
let value:Obj['a']
// T extends U 泛型


function getValues<T,K extends keyof T >(obj:T,keys:K[]):T[K][]{
  return keys.map(key=>obj[key])
}
console.error(getValues(obj,["a","b","c"]))// [1,2,3]
// console.log(getValues(obj,["d","f"]))// 类型检查报错

/**
 * 映射类型
 * 1）Readonly<T> 返回只读类型
 * 2) Required<T> 返回必选属性
 * 3）Partial<T> 返回可选属性
 * 4) Pick<T,K> 返回类型中K的属性
 * ...
 */

interface Obj1{
  a:number,
  b:string,
  c:boolean
}

type ReadonlyObj = Readonly<Obj1> // 映射出的类型都为只读属性
