//替换算法
function foundPerson(people) {
    const candidates = ["Don", "John", "Kent"];
    return people.find(p => candidates.includes(p)) || '';
   }
const pep = ['asd','Kent','dsa'];


console.log(foundPerson(pep));