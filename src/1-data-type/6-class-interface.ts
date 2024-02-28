interface Human{
  name:string,
  eat():void
}
/**
 * 类实现接口：接口中属性和方法都要实现
 */
class Asian implements Human{
  constructor(name:string){
    this.name = name
  }
   name:string
  eat(){
    console.log('eat')
  }
  sleep(){
    console.log('sleep')
  }
}

/**
 * 1.接口之间可以相互继承 interface extends interface
 * 2.类之间可以相互继承 class extends class
 * 3.接口可以通过类实现 interface extends class
 * 4.类可以通过接口实现 class implement interface
 */

/**
 *  接口继承
 */
interface Man extends Human{
  run():void
}
interface Child {
  cry():void
}
interface Boy extends Man,Child{
  
}
let boy:Boy = {
  name:'zhangsan',
  run(){},
  eat(){},
  cry(){},
}

/**
 * 接口继承类
 */

class Auto{
  state=1
  // private state2=2
}
//接口可以通过类实现 interface extends class
interface AutoInterface extends Auto{}

//类可以通过接口实现 class implement interface
class C implements AutoInterface{
  state=2
}
//子类可以通过接口实现 class implement interface
class D extends Auto implements AutoInterface{

}
