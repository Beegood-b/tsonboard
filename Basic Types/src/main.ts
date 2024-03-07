let myName: string = 'Artjoms'
let meaningOfLife: number;
let isLoading: boolean;
let album: string | number; // union type

myName = 'John'
meaningOfLife = 42
isLoading = true
album = 1881

const sum = (a: number, b: string) => {
  return a + b
}

let postId: string | number
let isActive: number | boolean | string // union types are not limited only to two data types

let re: RegExp = /\w+/g; // regular expression type