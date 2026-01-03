"use strict";

console.log("Hey I am a tutorial on loop")

let a = 1;

console.log(a)
console.log(a+1)
console.log(a+2)


// for loop !

for (let i = 0; i < 40; i++) {
    console.log(a+i);   // prints numbers from 0 to 39
}



let obj ={
    name: "Aryan",
    work: "Coding",
    company: "MC"
}

// for in loop !

// obj[key] is used because key is a variable
// obj.key would look for a property literally named "key"
for (const key in obj) {
        console.log(key);
}
// It type only key 
//name
//work
//company

for (const key in obj) {
        const element = obj[key];
        console.log(key, element);
}
// It type both key and element
//name Aryan
//work Coding
//company MC


// for of loop !

for (const v of "Aryan") {
    console.log(v) // it type A -> n every single string
}



// while loop !
// In while loop first check value condintion then type and repeat
let i = 0;
while (i < 10) {
    console.log(i)
    i++;
}



// do-while loop !
// In do-while loop first type then check condition and repeat
let i = 0;
do {
    console.log(i)
    i++;
} while (i < 6);
