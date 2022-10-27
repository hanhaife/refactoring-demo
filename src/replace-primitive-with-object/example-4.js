//以对象取代基本类型

class Order{
    constructor(data) {
        this.priority = data.priority;
    }
}
const orders = [
    new Order({priority:'high'}),
    new Order({priority:'high'}),
    new Order({priority:'rush'})
]
//高优先等级数量
const highPriorityCount = orders.filter(o => "high" === o.priority
|| "rush" === o.priority)
.length;
console.log(highPriorityCount);






// constructor(value) {
//     if (value instanceof Priority) return value;
//     if (Priority.legalValues().includes(value))
//       this._value = value;
//     else
//       throw new Error(`<${value}> is invalid for Priority`);
// }
// toString() {return this._value;}
// get _index() {return Priority.legalValues().findIndex(s => s === this._value);}
// static legalValues() {return ['low', 'normal', 'high', 'rush'];}

// equals(other) {return this._index === other._index;}
// higherThan(other) {return this._index > other._index;}
// lowerThan(other) {return this._index < other._index;}


// const  highPriorityCount = orders.filter(o => o.priority.higherThan(new Priority("normal")))
// .length;