// 内联函数
// 重构前

function reportLines(aCustomer) {
  const lines = [];
  gatherCustomerData(lines, aCustomer);
  return lines;
}

function gatherCustomerData(out, aCustomer) {
  const nameLine = ["name", aCustomer.name];
  const locationLine = ["location", aCustomer.location];
  out.push(nameLine);
  out.push(locationLine);
}

// test
console.log(
  reportLines({
    name: 'Bob',
    location: 'Beijing'
  })
);