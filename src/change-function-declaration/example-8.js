// 把参数改为属性

function inNewEngland(aCustomer) {
  return ["MA", "CT", "ME", "VT", "NH", "RI"].includes(aCustomer.address.state);
}

// test
console.log(
  inNewEngland({
    address: {
      state: 'MA'
    }
  })
);
console.log(
  inNewEngland({
    address: {
      state: 'KK'
    }
  })
);