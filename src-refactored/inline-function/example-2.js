// 内联函数
// 重构后

function reportLines(aCustomer) {
  const lines = [];
  lines.push(["name", aCustomer.name]);
  lines.push(["location", aCustomer.location]);
  return lines;
}

// test
console.log(
  reportLines({
    name: 'Bob',
    location: 'Beijing'
  })
);