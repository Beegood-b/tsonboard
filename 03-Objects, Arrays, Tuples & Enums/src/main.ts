
// Arrays

let stringArr = ['one', 'hey', 'Artjoms']

let guitars = ['Strat', 'Les Paul', 15150]

let mixedData = ['EVH', 1853, true]

stringArr[0] = 'John'
stringArr.push('hey')

guitars[0] = 1023
guitars.unshift('Jim')

// stringArr = guitars // this won't work accepts only string data
// guitars = stringArr // this can be re-assigned bc it accepts the string data type
// guitars = mixedData // won't work bc accepts only num and stings

let test = []
let bands: string[] = []
bands.push('Van Halen')

// Tuple
let myTuple: [string, number, boolean] = ['Dave', 42, true] // this is more strict -- specific positions and length

let mixed = ['John', 1, false] // this is an union type

// mixed = myTuple // no prob bc mixed is a type of array that accepts string, num and boolean

// myTuple = mixed // mixed is not required to have 3 elems so can't be assigned

myTuple[1] = 42

// Objects 

let myObj: object
myObj = [] // typeof myObj is object - this is reasigneable
myObj = bands
myObj = {}

const exampleObj = {
  prop1: 'Artjoms',
  prop2: true,
}

exampleObj.prop1 = 'John'

interface Guitarist {
  name?: string,
  active: boolean, // question mark makes the active optional
  albums: (string | number)[]
}

let evh: Guitarist = {
  name: 'Eddie',
  active: false,
  albums: [1923, 2332, 'OU123']
}

let jp: Guitarist = {
  name: 'Jimmy',
  active: true,
  albums: [555, 'II', '3'] // Guitarist can exist without the active prop
}

// evh.years = 40 // can't add another property bc it was not defined earilier

const greetGuitarist = (guitarist: Guitarist) => {
  if (guitarist.name) {
    return `Hello ${guitarist.name.toUpperCase()}!` // can't call a method on undefined
  }
  return 'Hello!'
}

console.log(greetGuitarist(jp))

// type and interface are working the same

// Enums
// Enums are one of the few features TypeScript has which is not a type-level extension of JavaScript.

enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}

console.log(Grade.U) 