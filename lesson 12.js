

var text = document.getElementById("text");

text.style.color = "red";
text.style.backgroundColor = "blue";

text.innerHTML = "New";

let spans = document.getElementsByTagName("span");

for (let i = 0; i < spans.length; i++) {
    console.log(spans[i].innerHTML);
}