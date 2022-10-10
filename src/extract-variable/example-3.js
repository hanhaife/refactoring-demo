// 提炼变量
// 重构前

function price(order) {
  //price is base price - quantity discount + shipping
  return (
    order.quantity * order.itemPrice -
    Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
    Math.min(order.quantity * order.itemPrice * 0.1, 100)
  );
}

// test
console.log(
  price({
    quantity: 2,
    itemPrice: 10
  })
);