/*

function info() {
    console.log("Bonjour");
    console.log("!");
}

info();

*/
/*
function info(word) {
    console.log(word + "!");

}

function summa(a, b) {
    var res = a + b;
    console.log(res);
    info(res);
}

summa(5, 7);

*/

function summma(arr) {
    var sum = 0;

    for(var i = 0; i < arr.length; i++) 
        sum += arr[i];

        console.log(sum);
}

var array = [6, 8, 1];


summma(array);
