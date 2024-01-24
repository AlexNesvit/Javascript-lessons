//   lesson 8 cikli
/*
for(var i = 100; i > 5; i /= 2) {
    console.log(i);
}
*/
/*
var j = 1000;
while(j >= 100) {
    console.log(j);
    j -= 100;
}

var isHasCar = true;    
while(isHasCar) {
    beskonechnii cikl warning
}
*/
/*
var x = 0;
do {
    console.log(x);
    x ++;
} while(x < 10);
*/
/*
for(var i = 10; i <= 20; i ++) {
    if(i % 2 == 0)
    continue;
   // break;
    console.log(i);
}
*/

var arr = [5, 7, 3, 8, 9, "stroka"];

for(var i = 0; i < arr.length; i++) {
    console.log("Element " + i + ": " + arr[i]);
}