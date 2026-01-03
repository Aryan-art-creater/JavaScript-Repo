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
