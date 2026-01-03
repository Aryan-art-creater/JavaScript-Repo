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


// && means both conditions 
// || means one of both conditions
// ! means logical not
// == equal
// != not equal


if (age >= 18) {
    console.log("you can drive")
}

else if (age == 0) {
    console.log("Are you kidding me")
}

else if (age == 1) {
    console.log("Are you again kidding me")
}

else {
    console.log("you cannot drive")
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
