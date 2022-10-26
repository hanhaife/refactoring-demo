//以查询取代临时变量

class Order{
    constructor(quantity, item) {
        this._quantity = quantity;
        this._item = item;
      }
    
    get price() {
        var basePrice = this._quantity * this._item.price;
        var discountFactor = 0.98;
        if (basePrice > 1000) discountFactor -= 0.03;
        return basePrice * discountFactor;
    }
}
const aOrder=new Order(800,{name:'肥皂',price:2})
console.log(aOrder.price);