// nn bb ss u -Primitives in Js

let a = null;   // Null
let b = 345;    // Number

let c = true;   // Boolean

let d = BigInt("555") +BigInt("445") // Large number values
let e = Symbol("This is the symbol")

// Undefined
let f = undefined
//or 
let g 

console.log(a,b,c,d,e,f,g)

console.log(typeof e)

//Non primitive data type -Objects in Js - The work of object is to create the key value pairs

const items = {
    "Apple": 40,
    "Mango": 20,
    "Orange": 10,
    "Abc": undefined,
    "xyz": true
}

console.log(items["xyz"])
