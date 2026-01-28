"use strict";

console.log(document.querySelector(".container").innerHTML);
console.log(document.querySelector(".container").textContent);
console.log(document.querySelector(".container").outerHTML);
console.log(document.querySelector(".container").innerText);
console.log(document.querySelector(".box").innerHTML); // Take only first Div
console.log(document.querySelector(".box").outerHTML);
console.log(document.querySelector(".box").innerText);

console.log(document.querySelector(".container").tagName);
console.log(document.querySelector(".container").nodeName);
console.log(document.querySelector(".box").tagName);
console.log(document.querySelector(".box").nodeName);

// it hide the contant
// document.querySelector(".container").hidden = true;

document.querySelector(".box").innerHTML = "Watashi wa Aryan desu";
console.log(document.querySelector(".box").hasAttribute("style"));
console.log(document.querySelector(".box").getAttribute("style"));
console.log(document.querySelector(".box").setAttribute("style", "display: inline"));
console.log(document.querySelector(".box").attributes);
console.log(document.querySelector(".box").removeAttribute("style"));

// By this you can edit any website or page
// document.designMode = "on"

console.log(document.querySelector(".box").dataset);
console.log(document.querySelector(".container").classList);
console.log(document.querySelector(".container").classList.add("Haven"));
console.log(document.querySelector(".container").classList.remove("red"));
console.log(document.querySelector(".container").className);

console.log(document.querySelector(".container").classList.toggle("red"));
console.log(document.querySelector(".container").classList.toggle("red"));
console.log(document.querySelector(".container").classList.toggle("red"));