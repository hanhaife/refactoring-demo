// 封装集合
class Person{
    constructor (name) {
        this._name = name;
        this._courses = [];
    }
    get name() {return this._name;}
    get courses() {return this._courses;}
    set courses(aList) {this._courses = aList;}ner = { firstName: "Rebecca", lastName: "Parsons" };
}
class Coures{
    constructor(name, isAdvanced) {
        this._name = name;
        this._isAdvanced = isAdvanced;
      }
      get name() {return this._name;}
      get isAdvanced() {return this._isAdvanced;}
}

const aPerson=new Person();
const numAdvancedCourses = aPerson.courses.filter(Coures.isAdvanced).length;

const basicCourseNames = readBasicCourseNames(filename);
aPerson.courses = basicCourseNames.map(name => new Course(name, false));