interface List {
  readonly id: number;// 只读属性
  name: string;
  age?: number; // 可选属性

}
interface Result {
  data: List[];
}

const getList = (result: Result) => {
  result.data.forEach((item) => {
    console.log(item.id, item.name);
  });
};

let result = {
  data: [
    {
      id: 1,
      name: "aaa",
      age:1  // 不会报错，鸭式变形
    },
    {
      id: 2,
      name: "bbb",
    },
  ],
};

getList(result);

getList( {
  data: [
    {
      id: 1,
      name: "aaa",
      age:1  // 直接传入字面量会报错
    },
    {
      id: 2,
      name: "bbb",
    },
  ]
});

//1. 使用类型断言 避免类型检查
getList( {
  data: [
    {
      id: 1,
      name: "aaa",
      age:1  // 直接传入字面量会报错
    },
    {
      id: 2,
      name: "bbb",
    },
  ]
} as Result);

//2. 使用类型断言 避免类型检查
getList(<Result> {
  data: [
    {
      id: 1,
      name: "aaa",
      age:1  // 直接传入字面量会报错
    },
    {
      id: 2,
      name: "bbb",
    },
  ]
} );

//3. 使用字符串索引签名
// interface List {
//   id: number;
//   name: string;
//   [x:string]: any;
// }
getList({
  data: [
    {
      id: 1,
      name: "aaa",
      age:1  // 直接传入字面量会报错
    },
    {
      id: 2,
      name: "bbb",
    },
  ]
} );