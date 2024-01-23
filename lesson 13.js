/*

setInterval(my_func, 1000);

let counter = 0;
function my_func() {
    counter++;  
    console.log("Counter: " + counter);
}
*/

/*
let counter = 0;
setInterval(function() {
counter++;
console.log("Counter: " + counter);

}, 1000);
*/

setTimeout(function() {
    console.log("Timer is working");
    
}, 2000);