// 封装变量
let defaultOwner = { firstName: "Martin", lastName: "Fowler" };

export function getDefaultOwner() {
  return Object.assign({}, defaultOwner);
}
export function setDefaultOwner(arg) {
  defaultOwner = arg;
}

// 使用数据
const spaceship = { owner: getDefaultOwner() };
// 更新数据
setDefaultOwner({ firstName: "Rebecca", lastName: "Parsons" });


// test
console.log(spaceship);
console.log(defaultOwner);