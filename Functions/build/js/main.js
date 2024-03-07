"use strict";
// Literal types
let myName;
let userName;
userName = 'Dave';
// Functions 
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello');
logMsg(add(2, 3));
let subtract = function (c, d) {
    return c - d;
};
// Typically meant more for Functions
// interface mathFunction {
// (a: number, b: number): number 
// } // Typically meant more for Classes and their ext.
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 2));
// Optional parameters
const addAll = (a, b, c) => {
    // Typeguard
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
// Default param value
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
logMsg(sumAll(undefined, 3));
// Default values won't work on the alias type or interface func
// Rest Parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2));
// Never type
const createError = (errMsg) => {
    throw new Error(errMsg);
};
// never type for errors and endless loops
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        // makes it void since we exited the loop
        if (i > 100)
            break;
    }
};
// ^ can be useful:
//custom typeguard
const isNumber = (value) => {
    return typeof value === 'number'
        ? true : false;
};
//use of the never type
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string'; // typeguards to check the type of value
    if (isNumber(value))
        return 'number';
    return createError('This should never happen!'); // returning a never type
};
