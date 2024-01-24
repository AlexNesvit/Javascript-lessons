
/*
var text = document.getElementById("text");

text.style.color = "red";
text.style.backgroundColor = "blue";

text.innerHTML = "New";

//let spans = document.getElementsByTagName("span");

let spans = document.getElementsByClassName("simple");

for (let i = 0; i < spans.length; i++) {
    console.log(spans[i].innerHTML);
}

*/

function checkForm(el) {

    let name = el.name.value;
    let pass = el.pass.value;
    let repass = el.repass.value;
    let state = el.state.value;

    let fail = "";
   
    if(name == "" || pass == "" || state == "")
        error = "Invalid";
    else if(name.length <= 1 || name.length > 50)
        error = "Name incorrect";
    else if(pass != repass)
        error = "Pass incorrect";
    else if(pass.split("&").length > 1)
        error = "Pass incorrect";

    if(error != "") {
        document.getElementById("error").innerHTML = error;

        return false;
    } else {
        alert("Ok");
     //   window.location = 'http://localhost'; adress cite
        return true;
    }
}