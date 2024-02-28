/**
 * 定义函数
 * 1. 函数名function
 * 2. 变量定义函数类型
 * 3. interface 定义函数类型
 * 4. type 类型别名 定义函数类型
 */

// function sub(x:number,y:number):number{
//   return x-y
// }


// let sub: (x:number,y:number)=>number
//  sub = (a,b)=>a-b
//  sub(1,2)


// interface Sub {
//   (x:number,y:number):number
// }
// let sub:Sub = (a,b)=>a-b
// sub(1,2)


type Sub = (x:number,y:number)=>number
let sub:Sub = (a,b)=>a-b
sub(1,3)

/**
 * 函数参数
 * 1.可选参数,必须位于必选参数之后
 * 2.参数默认值，必须参数之前的默认参数要传undefined
 * 3.剩余参数
 */

function add(x:number,y?:number):number{
  return y? x+y:x
}

function add1(x:number,y=0,z:number,q=1):number{
  return x+y+z+q
}
add1(1,undefined,3)

function add2(x:number,...rest:number[]):number{
  return x+ rest.reduce((a,b)=>a+b)
}
add2(1,2,3,4,4)

/**
 * 函数重载，函数名相同,参数不同
 */
function override(...rest:number[]):number
function override(...rest:string[]):string
function override(...rest:any[]):any{
  let first  = rest[0]
  if(typeof first === 'number'){
    return rest.reduce((a,b)=>a+b)
  }
  if(typeof first === 'string'){
    return rest.join('')
  }
}