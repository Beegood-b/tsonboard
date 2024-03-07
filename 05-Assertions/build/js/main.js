"use strict";
// convert to more or less specific
let a = 'hello';
let b = a; // less specific type
let c = a; // more specific
//type of syntax is not working in React
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
// Be careful bc TS sees no problem here, but a string is returned
let nextVal = addOrConcat(2, 2, 'concat');
// 10 as string
10; // double casting -- not recomended
// The DOM
const img = document.querySelector('img');
const myImg = document.getElementById('#img');
const nextImg = document.getElementById('#img'); // syntax doesn't work on React
img.src;
myImg.src;
