console.log("Hello I am conditional tutorial")

let age = 21;
// let grace = 2;

// age += grace
// console.log(age)
// console.log(age - grace)
// console.log(age * grace)
// console.log(age / grace)
// console.log(age ** grace)
// console.log(age % grace)

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


/*
translates to:
if(a>b){
    let c = a - b;
}
else{
        let c = b - a;
}
*/