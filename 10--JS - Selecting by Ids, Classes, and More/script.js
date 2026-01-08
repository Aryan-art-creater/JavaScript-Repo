"use strict";

let boxes = document.getElementsByClassName("box");
console.log(boxes);

boxes[2].style.backgroundColor = "yellow";

document.getElementById("redbox").style.backgroundColor = "skyblue"

document.querySelector(".box").style.backgroundColor = "red";

document.querySelectorAll(".box").forEach(e => e.style.backgroundColor = "blue");