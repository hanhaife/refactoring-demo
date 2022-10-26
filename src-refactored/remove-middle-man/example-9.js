//移除中间人

class Person{
  get department() {return this._department;}
  set department(arg) {this._department = arg;}
}
class Department{
  get manager() {return this._manager;}
  set manager(arg) {this._manager = arg;}
}
const aDepartment=new Department();
aDepartment.manager = '罗翔';

const aPerson=new Person();
aPerson.department = aDepartment;

const manager = aPerson.department.manager;
console.log(manager);