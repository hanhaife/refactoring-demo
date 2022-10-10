// 拆分阶段

function priceOrder(product, quantity) {
  const priceData = calculatePricingData(product, quantity);
  return applyShipping(priceData);
}

function calculatePricingData(product, quantity) {
  const basePrice = product.basePrice * quantity;
  const discount = Math.max(quantity - product.discountThreshold, 0)
    * product.basePrice * product.discountRate;
  return { basePrice, discount, shippingMethod, quantity };
}

function applyShipping(priceData) {
  const shippingPerCase = (priceData.basePrice > priceData.shippingMethod.discountThreshold)
    ? priceData.shippingMethod.discountedFee : priceData.shippingMethod.feePerCase;
  const shippingCost = priceData.quantity * shippingPerCase;
  return priceData.basePrice - priceData.discount + shippingCost;
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