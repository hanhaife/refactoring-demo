//内联类
//跟踪信息

class Shipment{
    get trackingInfo() {
        return `${this.shippingCompany}: ${this.trackingNumber}`;
    }

    get shippingCompany() {
        return this._shippingCompany;
      }
    set shippingCompany (arg) {
        this._shippingCompany = arg;
    }
    get trackingNumber() {
        return this._trackingNumber;
      }
    set trackingNumber (arg) {
        this._trackingNumber = arg;
    }
    
}
const aShipment = new Shipment();

aShipment.shippingCompany = '船运公司';
aShipment.trackingNumber = '编号0076';

console.log(aShipment.trackingInfo);
