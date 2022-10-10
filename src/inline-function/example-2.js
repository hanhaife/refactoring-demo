// 内联函数
// 重构前

// function customerInfo(customer) {
//   const name = customer.name;
//   前
//   const sexual = getSexual(customer);
//   后
//   const sexual = customer.sexual === 1 ? "男" : "女";
//   console.log(name, sexual)
// }

// function getSexual(customer) {
//   return customer.sexual === 1 ? "男" : "女";
// }

function reportLines(aCustomer) {
  const lines = [];
  gatherCustomerData(lines, aCustomer);
  return lines;
}

function gatherCustomerData(out, aCustomer) {
  out.push(["name", aCustomer.name]);
  out.push(["location", aCustomer.location]);
}

// test
console.log(
  reportLines({
    name: 'Bob',
    location: 'Beijing'
  })
);