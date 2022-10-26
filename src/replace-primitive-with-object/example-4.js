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
