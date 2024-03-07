// Type Aliases
type stringOrNumber = string | number

type stringOrNumberArray = (string | number )[]

interface Guitarist {
  name?: string,
  active: boolean, 
  albums: stringOrNumberArray
}

type userId = stringOrNumber

// Literal types
let myName: 'Artjoms'

let userName: 'Artjoms' | 'John' | 'Dave'
userName = 'Dave'

// Functions 
const add = (a: number, b: number): number => {
  return a + b
}

const logMsg = (message: any): void => {
  console.log(message)
}

logMsg('Hello')
logMsg(add(2,3))

let subtract =  function (c: number, d: number): number {
  return c - d
}

type mathFunction = (a: number, b: number) => number 
// Typically meant more for Functions

// interface mathFunction {
// (a: number, b: number): number 
// } // Typically meant more for Classes and their ext.

let multiply: mathFunction = function (c, d) {
  return c * d
}

logMsg(multiply(2,2))

// Optional parameters
const addAll = (a: number, b: number, c?: number): number => {
  // Typeguard
  if (typeof c !== 'undefined') {
    return a + b + c
  }
  return a + b
}
// Default param value
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
    return a + b + c
}

logMsg(addAll(2,3,2))
logMsg(addAll(2,3))
logMsg(sumAll(2,3))
logMsg(sumAll(undefined,3))

// Default values won't work on the alias type or interface func

// Rest Parameters
const total = (a: number,...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr)
}

logMsg(total(1,2))

// Never type
const createError = (errMsg: string): never => {
  throw new Error(errMsg)
} 

// never type for errors and endless loops

const infinite = () => {
  let i: number = 1
  while (true) {
    i++
    // makes it void since we exited the loop
    if (i > 100) break
  }
}

// ^ can be useful:

//custom typeguard
const isNumber = (value: any): boolean => {
  return typeof value === 'number'
    ? true : false
}

//use of the never type
const numberOrString = (value: number | string): string => {
  if (typeof value === 'string') return 'string' // typeguards to check the type of value
  if (isNumber(value)) return 'number'
  return createError('This should never happen!') // returning a never type
}