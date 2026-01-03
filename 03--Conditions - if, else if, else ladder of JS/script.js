console.log("Hello I am conditional tutorial")

let age = 21;
// let grace = 2;

// age += grace // it means add grace into age and that's our new age.
// console.log(age)
// console.log(age - grace) // subtract
// console.log(age * grace) // multiply
// console.log(age / grace) // divide
// console.log(age ** grace) // exponentiation
// console.log(age % grace) // modulus


// && -> both conditions must be true
// || -> at least one conditions is true
// !  -> logical not
// == equal
// != not equal


// == allows type conversion
// === checks value and type

if (age < 0) {
  console.log("Invalid age");
} 
else if (age === 0) {
  console.log("Are you kidding me?");
} 
else if (age < 18) {
  console.log("You cannot drive");
} 
else {
  console.log("You can drive");
}




a = 6;
b = 8;
let c = (a > b) ? (a - b) : (b - a);

// translates to:
// if(a>b){
//     let c = a - b;
// }
// else{
//         let c = b - a;
// }



console.log("5" == 5);   // true
// "5" (string) is converted to number 5
// then 5 == 5 → true

console.log("5" === 5); // false
// === does not perform type conversion
// string !== number, so result is false



0 == false        // true  (false is converted to 0)
0 === false       // false (number !== boolean)

null == undefined // true  (special JS rule) (JS treats both as "empty")
null === undefined// false (different types, no conversion)
