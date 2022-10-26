// 封装集合
class Person{
    constructor (name) {
        //学生
        this._name = name;
        //课程
        this._courses = [];
    }
    get name() {return this._name;}
    get courses() {return this._courses.slice();}
    set courses(aList) {this._courses = aList.slice();}
    addCourse(aCourse){
        this._courses.push(aCourse)
    }
    removeCourse(aCourse,fnIfAbsent=()=>{throw new RangeError();}){
        const index=this._courses.indexOf(aCourse);
        if(index===-1)fnIfAbsent();
        else this._courses.splice(index,1)
    }
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
const filename = ['历史','地理','生物']
function readBasicCourseNames(filename) {
    return filename
}
for (const name of readBasicCourseNames(filename)) {
    aPerson.addCourse(new Course(name,false))
}
console.log(aPerson.courses);