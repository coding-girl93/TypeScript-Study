/**
 * 类型保护机制
 * TS能够在特定的区块中保证变量属于某种确定的类型。可以在此区块中放心的引用类型的属性或者方法
 */

enum Type {
  Strong,Week
}

class Java{
  helloJava(){
    console.log('hello java')
  }
  java:any
}
class JavaScript{
  helloJavaScript(){
    console.log('hello JavaScript')
  }
  javascript:any
}

// function getLanguage(type:Type){
//   let lang = type === Type.Strong ? new Java() : new JavaScript()
//   if(lang.helloJava){
//     lang.helloJava()
//   }else{
//     lang.helloJavaScript()
//   }
// }

/**
 *  1.类型断言 需要在调用的地方全部使用类型断言，比较繁琐
 * @param type 
 */
function getLanguage(type:Type){
  let lang = type === Type.Strong ? new Java() : new JavaScript()
  if((lang as Java).helloJava){
    (lang as Java).helloJava()
  }else{
    (lang as JavaScript).helloJavaScript()
  }
}

/**
 * 2.instanceof
 */
function getLanguage1(type:Type){
  let lang = type === Type.Strong ? new Java() : new JavaScript()
  if(lang instanceof Java){
    lang.helloJava()
  }else{
    lang.helloJavaScript()
  }
}
/**
 * 3.in
 */
function getLanguage2(type:Type){
  let lang = type === Type.Strong ? new Java() : new JavaScript()
  if('java' in lang){
    lang.helloJava()
  }else{
    lang.helloJavaScript()
  }
}

/**
 * 4.typeof 联合类型
 */
function getLanguage3(type:string|number){
  if(typeof type === 'string'){
    console.log('string')
  }else{
    console.log('number')
  }
}


/**
 * 4.类型保护函数 联合类型参数
 */
function isJava (lang:Java|JavaScript):lang is Java{
  return (lang as Java).helloJava!==undefined
}
function getLanguage4(type:string|number){
  let lang = type === Type.Strong ? new Java() : new JavaScript()
  if(isJava(lang)){
    lang.helloJava()
  }else{
    lang.helloJavaScript
  }
}