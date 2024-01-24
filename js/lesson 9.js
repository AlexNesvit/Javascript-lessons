/*

alert("La méteo est exellente.");

*/
/*
var data = confirm("Recrutez-moi");
if (data) {
    alert("Vous avez gagnier!");
}*/
/*
var data = prompt("Quelle age vous avez");
console.log(data);
*/

var person = null;
if(confirm("Vous etes sur?")) {
    person = prompt("Votre nom");
    alert("Bonjour, " + person);
} else {
    alert("Vous aves annulé");
}