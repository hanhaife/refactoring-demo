// 拆分阶段

function priceOrder(product, quantity, shippingMethod) {
  const basePrice = product.basePrice * quantity;
  const discount = Math.max(quantity - product.discountThreshold, 0)
    * product.basePrice * product.discountRate;
  const shippingPerCase = (basePrice > shippingMethod.discountThreshold)
    ? shippingMethod.discountedFee : shippingMethod.feePerCase;
  const shippingCost = quantity * shippingPerCase;
  const price = basePrice - discount + shippingCost;
  return price;
}

// test
const product = {
  basePrice: 10,
  discountRate: 0.3,
  discountThreshold: 4
}

const shippingMethod = {
  discountThreshold: 10,
  discountedFee: 5,
  feePerCase: 3
}

console.log(
  priceOrder(product, 20, shippingMethod)
);