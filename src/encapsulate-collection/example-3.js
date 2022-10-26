// 封装集合
class Person{
    constructor (name) {
        //学生
        this._name = name;
        //课程
        this._courses = [];
    }
    get name() {return this._name;}
    get courses() {return this._courses;}
    set courses(aList) {this._courses = aList;}
}
class Course{
    constructor(name, isAdvanced) {
        this._name = name;
        this._isAdvanced = isAdvanced;
    }
    get name() {return this._name;}
    get isAdvanced() {return this._isAdvanced;}
}
const aPerson=new Person('张三');
aPerson.courses = [
    {
        name:'语文',
        isAdvanced:false
    },
    {
        name:'数学',
        isAdvanced:false
    },
    {
        name:'英语',
        isAdvanced:false
    },
];
const numAdvancedCourses = aPerson.courses.filter(c => c.isAdvanced).length
console.log(numAdvancedCourses);