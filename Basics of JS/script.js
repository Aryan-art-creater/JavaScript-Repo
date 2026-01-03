alert("Hello World");

console.log("Code is running...")
console.log("Code is also running...")
console.log("Code is looking like wow...")


// var is function-scoped, let is block-scoped (avoid var in modern JS)
let a = Number(prompt("Enter your number"))
let isTrue = confirm("Are you sure you want to leave this page and blast your computer ")

if(isTrue){
    console.log("computer is blasting ")
}

else{
    console.log("computer is not blasting ")
}

console.log("your number is " + a) // Here value of a is change on the basis of if and else.

document.title = "Hey gun park" // For title

document.body.style.backgroundColor = "red" // For background color 
