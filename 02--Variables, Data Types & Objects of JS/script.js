"use strict";

console.log("Hey this is tutorial 55")

let a = 5;
// a = a + 1
let b = 6;
let c = "aryan";
let _a = "aditya";
// var 55a = "jatin"; //  Not Allowed

console.log( a + b + 7 )
console.log( a + b + 7 + c)
console.log( a + b + 7 , c , _a)

console.log(typeof a , typeof b , typeof c) // Type of means a is number, string, null many more.


// In {a=90} means a specific value of a 
{
    let a = 90; // block-scoped variable
    console.log(a)
}

// const a1 = 10
// a1 = a1 + 1
// Not Allowed because a1 is const.

let p = "Aryan"; // String type 
let q = 2; // number type 
let r = 3.4556; // number type 
const s = true; // boolean type
let x = undefined; // undefined type
let y = null; // null value (typeof shows "object" — JS bug)

console.log(p ,q ,r ,s ,x ,y)
console.log(typeof p ,typeof q ,typeof r ,typeof s ,typeof x ,typeof y)

let o = {
    name: "Aryan",
    JobCode: 5000,
    isHandsome: true
}


console.log(o)
o.salary = "100 Cr"; // It add Salary in Object (o)
console.log(o)
o.salary = "500 Cr"; // It change the value of salary
console.log(o)
