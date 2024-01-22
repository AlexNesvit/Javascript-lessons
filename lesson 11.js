var counter = 0;

function onClickButton(el) {
   counter++;
   el.innerHTML = "Vous avez appuer:" + counter;
   el.style.background = "red";
   el.style.color = "blue";
   
   el.style.cssText = "border-radius: 5px; border: 0; font-size: 20px";
}