"use strict";

console.log("JavaScript Strings");

const a = "Aryan";
console.log(a);
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]); // undefined
console.log(a.length);

let real_name = "Aryan";
let friend = "Aditya";

console.log("The MC of this anime is " + real_name + " and MF is " + friend );
console.log(`The MC of this anime is ${real_name} and MF is ${friend}`);

const b = "Naruto"

console.log(b.toUpperCase());
console.log(b.toLowerCase());
console.log(b.length);
console.log(b.slice(1, 5));
console.log(b.slice(1));
console.log(b.replace("arut" , "****")); // replace returns a new string, original string remains unchanged
console.log(`${b} ${a} Hinata Sanjana`);
