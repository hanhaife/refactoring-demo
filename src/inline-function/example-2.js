// 内联函数
// 重构前

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