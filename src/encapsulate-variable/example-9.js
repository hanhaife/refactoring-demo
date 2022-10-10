// 封装变量

let defaultOwner = { firstName: "Martin", lastName: "Fowler" };

// 使用数据
const spaceship = { owner: defaultOwner };

// 更新数据
defaultOwner = { firstName: "Rebecca", lastName: "Parsons" };


// test
console.log(spaceship);
console.log(defaultOwner);