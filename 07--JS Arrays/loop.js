"use strict";

let a = [1, 57, 3, 4, 67];

for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element);
}


a.forEach((value, index, arr) => {
    console.log(value, index, arr);
})


let obj = {
    a: 1,
    b: 2,
    c: 4
}


for (const key in obj) {
    if (!Object.hasOwn(obj, key)) continue;

    const element = obj[key];
    console.log(key, element);

}


for (const element of a) {
    console.log(element);
}