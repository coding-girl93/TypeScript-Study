// 原始类型
let bool: boolean = true;
let num: number = 10;
let str: string = "hello";

// 数组
let array: Array<number | string> = [1, 2, 3, "dd"]; // 联合类型
let array2: number[] = [1, 2, 3];
let array3: Array<number> = [1, 2, 3];

// 元组:特殊的数组，限制了数组的类型和个数
let tuple: [string, number] = ["hello", 10];
tuple.push("world"); //可以添加元素，但是不能访问tuple[2]

// 函数
let add = (x: number, y: number): number => x + y;
let compute: (x: number, y: number) => number; // 定义函数类型
compute = (a, b) => a + b; // 定义函数
compute(1, 2); // 函数调用

// 对象
let obj: object = { x: 1, y: 2 };
// obj.x = "hello"; // 可以修改对象的属性 类型“object”上不存在属性“x”。
let obj2: { x: number; y: string } = { x: 1, y: "hello" };
// obj2.x = "eee"; // 不可以修改对象的属性 不能将类型“string”分配给类型“number”。ts(2322)

// symbol
let sym: symbol = Symbol("hello");

// undefined null 不能将类型“undefined” "null"分配给类型其他类型。ts(2322) 可通过tsconfig中的strictNullChecks设置
let un: undefined = undefined;
let nu: null = null;
// num = undefined; // ts(2322)
// num = null; // ts(2322)

//void
let noReturn = (): void => {};

//any 可以任意赋值
let any = "hello";
// any=1

/**
 * never 永远不会出现
 * 1.没有返回直接抛出异常
 * 2.死循环
 */
let error = (): never => {
  throw new Error("error");
};
let eddless = () => {
  while (true) {}
};

