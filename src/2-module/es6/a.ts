// 单独导出
export let a = 1;
//批量导出
let b = 2;
let c = 3;

export { b, c };

// 导出接口
export interface IUser {
  x: number;
  y: string;
}

// 导出函数
export function add(x: number, y: number) {}

// 导出时另起别名
function g() {}
export { g as G };

// 默认导出，无需函数名
export default function f() {}

// 引入外部模块 重命名后再导出
export { str as hello } from "./b";
