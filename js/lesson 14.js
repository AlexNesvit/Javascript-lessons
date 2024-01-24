/*
let date = new Date();

console.log(date.getHours() + ':' + date.getMinutes());

*/
/*
let arr = [8, 90, 5, 7, 8, 9];

//console.log(arr.join(""));

console.log(arr.sort());
*/

class Person {
    constructor(name, age, happiness) { 
    this.name = name;
    this.age = age;
    this.happiness = happiness;
    }
}

const alex = new Person("Alex", 45, true);
const bob = new Person("Bob",25, false);
console.log(alex.name, bob.name);
