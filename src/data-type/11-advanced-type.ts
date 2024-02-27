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