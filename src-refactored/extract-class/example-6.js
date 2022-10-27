//提炼类

class Person{
    constructor(){
        this._telephoneNumber=new TelephoneNumber();
    }
    get name()   {return this._name;}
    set name(arg) {this._name = arg;}
    get telephoneNumber() {return this._telephoneNumber.toString;}
    //办公室区域号
    get officeAreaCode()   {return this._telephoneNumber.areaCode;}
    set officeAreaCode(arg) {this._telephoneNumber.areaCode = arg;}
    //办公室号
    get officeNumber() {return this._telephoneNumber.number;}
    set officeNumber(arg) {this._telephoneNumber.number = arg;}
}
class TelephoneNumber {
    get areaCode () {
        return this._officeAreaCode
    }
    set areaCode (arg) {
        this._officeAreaCode=arg;
    }
    get number() {return this._officeNumber;}
    set number(arg) {this._officeNumber = arg;}
    get toString() {return `(${this.areaCode}) ${this.number}`;}
}

const aPerson=new Person();
aPerson.officeAreaCode='13579';
aPerson.officeNumber='246810';
console.log(aPerson.telephoneNumber);