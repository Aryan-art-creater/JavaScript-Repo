"use strict";

function nice(name) {
  console.log(`Hey ${name}, you look confident!`);
  console.log(`Hey ${name}, you are doing great!`);
}

nice("Aditya");

function sum(a, b, c = 5) {
  return a + b + c;
}

const result1 = sum(2, 3, 2);
const result2 = sum(5, 3);
const result3 = sum(2, 20);

console.log(`Result 1: ${result1}`);
console.log(`Result 2: ${result2}`);
console.log(`Result 3: ${result3}`);

const func1 = (x) => {
  console.log("I am an arrow function", x);
};

func1(23);
func1(99);
func1(55);