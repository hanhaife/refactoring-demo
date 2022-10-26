//以查询取代临时变量

class Order{
    constructor(quantity,item){
        this._quantity = quantity;
        this._item = item;
    }
    get price () {
        return this.basePrice * this.discountFactor;
    }
    get discountFactor () {
        var discountFactor = 0.98;
        if(this.basePrice > 1000){
            discountFactor -= 0.03;
        }
        return discountFactor;
    }
    get basePrice () {
        return this._quantity * this._item.price;
    }
}
const aOrder=new Order(800,{name:'肥皂',price:2})
console.log(aOrder.price);