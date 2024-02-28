// const hello: string = "Hello World";
// console.log(hello);

// document.querySelectorAll(".app")[0].innerHTML = hello;

// 安装类型声明包
import $ from "jquery";
import moduleLib from "./5-declaration-file/module-lib.js";
$(".app").css("color", "red");

// globalLib({ x: 1 });
// globalLib.doSomething();
console.log(moduleLib.doSomething());
