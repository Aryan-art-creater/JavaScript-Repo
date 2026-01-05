"use strict";

function nice(name) {
    console.log("Hey " + name + " you are nice!");
    console.log("Hey " + name + " you are good!");
    console.log("Hey " + name + " you look sexy!");
    console.log("Hey " + name + " you are very rich!");
}

nice("Aditya");


function sum(a, b, c = 5) {
    // a and b are non const and c is const.
    // console.log(a + b);
    console.log(a, b, c);
    return a + b + c;
}

result1 = sum(2, 3, 2); // sum of a, b, c is result1
result2 = sum(5, 3);  // if value of c is not given then c is 5.
result3 = sum(2, 20);
result4 = sum(25, 3);
result5 = sum(2, 36);

console.log("The sum of these numbers is : " + result1);
console.log("The sum of these numbers is : " + result2);
console.log("The sum of these numbers is : " + result3);
console.log("The sum of these numbers is : " + result4);
console.log("The sum of these numbers is : " + result5);


const func1 = (x)=>{
    console.log("I am an arrow function", x);
}

func1(23); // func1(x) put any value of x.
func1(99);
func1(55);