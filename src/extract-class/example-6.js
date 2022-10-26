//提炼类

class Person{
    get name()   {return this._name;}
    set name(arg) {this._name = arg;}
    get telephoneNumber() {return `(${this.officeAreaCode}) ${this.officeNumber}`;}
    //办公室区域号
    get officeAreaCode()   {return this._officeAreaCode;}
    set officeAreaCode(arg) {this._officeAreaCode = arg;}
    //办公室号
    get officeNumber() {return this._officeNumber;}
    set officeNumber(arg) {this._officeNumber = arg;}
}

const aPerson=new Person();
aPerson.officeAreaCode='13579';
aPerson.officeNumber='246810';
console.log(aPerson.telephoneNumber);