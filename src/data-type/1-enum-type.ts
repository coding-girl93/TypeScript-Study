/**
 *  枚举:一组有名字的常量集合,只读类型
 */
// 数字枚举
enum Role {
  A,
  B,
  C,
}
console.log(Role.A); // 0
// 字符串枚举
enum Color {
  RED = "red",
  GREEN = "green",
  BLUE = "blue",
  YELLOW = "yellow",
}
// 异构枚举
enum Role2 {
  A,
  B = "teacher",
}
// 常量枚举
const enum Month {
  Jan,
  Feb,
  Mar,
}
let month=[ Month.Jan, Month.Feb, Month.Mar];