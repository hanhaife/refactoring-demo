//移除中间人

class Person{
  get manager() {return this._department.manager;}
}
class Department{
  get manager() {return this._manager;}
}
// const aDepartment=new Department();
// aDepartment.manager = '罗翔';

// const aPerson=new Person();
// aPerson.department = aDepartment;

const manager = aPerson.manager;
console.log(manager);