/**
 * 接口声明合并
 */

interface A {
  x: number;
  foo(a: number): number; //3
}
interface A {
  y: number;
  foo(a: string): string; //1
  foo(a: number[]): number[]; // 2
}

let a: A = {
  x: 1,
  y: 2,
  foo(a: any) {
    return a;
  },
};

/**
 * 函数和命名空间合并
 */
function Lib() {}
namespace Lib {
  export let version = "1.0";
}
console.log(Lib);

/**
 * 类和命名空间合并
 */
class C {}
namespace C {
  export let x = 1;
}

/**
 * 枚举和命名空间合并
 */
enum E {}
namespace E {}
