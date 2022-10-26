//隐藏委托关系

class Person {
    constructor(name) {
        this._name = name;
    }
    get name() {return this._name;}
    get department()    {return this._department;}
    set department(arg) {this._department = arg;}
}
class Department{
    get chargeCode() {return this._chargeCode;}
    set chargeCode(arg) {this._chargeCode = arg;}
    get manager() {return this._manager;}
    set manager(arg) {this._manager = arg;}
}
const aDepartment=new Department();
aDepartment.manager = '罗翔';

const aPerson=new Person('张三');
aPerson.department = aDepartment;

const manager = aPerson.department.manager;
console.log(manager);
