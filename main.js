
// let myName;

// myName = "Alex";

// console.log(myName);

// const herName = "Bogdan";

// console.log(herName);

// const objectA = {
//     a: 10,
//     b: true 
// }
// const copyOfA = objectA;

// copyOfA.c = "abc";

// const myCity = {
//     city: "New York",
//     info: {
//         isPopular: true,
//         country: "United States",
//     }
// }

// console.log(myCity.info.isPopular);

// delete myCity.info["isPopular"];
// console.log(myCity);


// const myCity = {
//     city: "New York",
//     cityGreeting () {
//         console.log("Greetings!!!");
//     }
// }

// myCity.cityGreeting ();


// const post = {
//     title: "My post",
//     likeQty: 5
// }

// JSON.stringify(post);


// const a = 10
// let b = a

// console.log (a, b);
// b = 30

// console.log(a, b);

// const person = {
//     name: "Bob",
//     age: 21
// }

// person.age = 30
// person.inAdult = true

// console.log(person.age)
// console.log(person.inAdult);

// function myFn(a, b) {
//     let c;
//     a = a + 1;
//     c = a + b;
//     return c;
// }

// let d;
// d = myFn(10, 3);

// console.log(d);

// let a
// let b
// function myFn() {
//     let b 
//     a = true
//     b = 10
//     console.log(b)
// }

// myFn()

// console.log(a)
// console.log(b)

// // "use strict";

// let a, b

// a = 10
// b = a

// let c = a + b

// console.log(c) 

// let b = 10
// b && console.log("Ok")

// let c
// c && console.log("Error");

// const buttonInfo = {
//     text: "OK",
//     width: 50000
// }

// const buttonStyle = {
//     color:"yellow",
//     width: 200,
//     height: 300
// }

// const button = {
//     ...buttonStyle,
//     ...buttonInfo
// }

// console.log(button)

// const myFunction = function (a, b) {
//     let c;
//     a = a + 1;
//     c = a + b;
//     return c;
// }

// console.log(myFunction(5, 3));

//        -----4:56-----

// function multByFactor(value, mltiplier = 1) {
//     return value * mltiplier;
// }
// console.log(multByFactor(10, 2));
// console.log(multByFactor(5));

// ----5:40----
// const myArray = [1, 2, 3, 4, 5, 6, 7, 8]
// console.log(myArray)

// const myArray2 = new Array(1, 2, 3)
// console.log(myArray2)


//    ---5:47---
// const myArray = [1, true, "a"]
// console.log(myArray)

// console.log(myArray[0])
// console.log(myArray[1])

// console.log(myArray.length)

// const myArray = [1, true, "a"]
// console.log(myArray)
// console.log(myArray.length)

// myArray[1] = 2
// console.log(myArray)

// //------PUSH, POP, UNSHIFT--- 5:59----

// const myArray = [1, true, "a"]
// console.log(myArray)

// myArray.push(4)
// console.log(myArray)

// myArray.push(true)
// console.log(myArray)

// myArray.pop()
// console.log(myArray)


//-----forEach----6:06----

// const myArray = [1, 2, 3]
// console.log(myArray)

// myArray.forEach(el => console.log(el * 2))
// console.log(myArray)

//----MAP---6:13---

// const myArray = [1, 2, 3]
// console.log(myArray)

// const newArray = myArray.map(el => el * 3)
// console.log(newArray)
// console.log(myArray)

//----if, else, switch---6:35---

// let val = 10

// if (val > 5) {
//     val += 20
// }
// console.log(val)

//----if, else---6:43--

// let val = 10

// if (val < 5) {
//     val += 20
// } else {
//     val -= 20
// }
// console.log(val)

//----if, else, if -----6:46

// const age = 7

// if (age >= 18) {
//     console.log("Is adult")
// }   else if (age>= 12){
//     console.log("Is teenager")
// }else {
//     console.log("Is child")
// }

// ----switch---
// const month = 12

// switch (month) {
//     case 12:
//         console.log("December")
//         break
//     case 1:
//         console.log("Jan")
//         break
//     case 2:
//         console.log("Feb")
//         break
//         default:
//             console.log("C'est n'a pas l'hiver")
// }

//----i++----7:22----
// ---for---

// for (let i = 0; i < 5; i++) {
//     console.log(i)
// }

//----while---7:37---

// let i = 0

// while (i<5) {
//     console.log(i)
//     i++
// }

//---do while---7:40---

//----for of---7:54---

// const myString = "Hey"

// for(const letter of myString) {
//     console.log(letter)
// }

//----class---8:40---

// class Comment {
//     constructor(text) {
//         this.text = text
//         this.votesQty = 0
//     }
//     upvote() {
//         this.votesQty += 1
//     }
// }


