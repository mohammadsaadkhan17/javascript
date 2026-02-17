

//Q1

console.log("ama\"".length)



const sentence = "The quick brown fox jumps over the lazy dog.";

const word = "Fox";


console.log(sentence.includes(word))
console.log(`The word "${word}" ${ sentence.includes(word) ? "is" : "is not"} in the sentence`,);
// Expected output: "The word "fox" is in the sentence"

//Q2

console.log(word.startsWith("a"))
console.log(word.endsWith("x"))

//Q3
console.log(word.toLowerCase())

//Q4

let str ="Please give rs 1000"

console.log(str.slice("Plesase give rs".length))

let n ="78"

let no = Number.parseInt(n)  //It is used to change string to number

console.log(typeof no)

//Q5

let str2 ="Harry"

str2[4] ="l" //cannot change bcoz string is immutable
console.log(str2)