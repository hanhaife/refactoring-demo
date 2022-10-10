// 提炼变量
// 重构后

function price(order) {
  const basePrice = order.quantity * order.itemPrice;
  const quantityDiscount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
  const shipping = Math.min(order.quantity * order.itemPrice * 0.1, 100)

  return basePrice - quantityDiscount + shipping;
}

// test
console.log(
  price({
    quantity: 2,
    itemPrice: 10
  })
);