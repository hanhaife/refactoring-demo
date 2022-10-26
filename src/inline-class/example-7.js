//内联类
//跟踪信息
class TrackingInformation {
    //船运公司
    get shippingCompany() {
      return this._shippingCompany;
    }
    set shippingCompany(arg) {
      this._shippingCompany = arg;
    }
    //跟踪编号
    get trackingNumber() {
      return this._trackingNumber;
    }
    set trackingNumber(arg) {
      this._trackingNumber = arg;
    }
    get display() {
      return `${this.shippingCompany}: ${this.trackingNumber}`;
    }
}

class Shipment{
    get trackingInfo() {
        return this._trackingInformation.display;
    }
    get trackingInformation() {return this._trackingInformation;}
    set trackingInformation(aTrackingInformation) {
        this._trackingInformation = aTrackingInformation;
    }
}
const aTrackingInformation=new TrackingInformation();
const aShipment = new Shipment();
aShipment.trackingInformation = aTrackingInformation;

aShipment.trackingInformation.shippingCompany = '船运公司';
aShipment.trackingInformation.trackingNumber = '编号0076';
console.log(aShipment.trackingInformation.display);