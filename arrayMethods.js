let arr =[34,45,67,76,78,90]

let b = arr.toString(); //to convert into a String

console.log(typeof arr) 

console.log(b, typeof b)

let c =arr.join("-")

console.log(c, typeof c)

let r =arr.pop(); //removes last element and returns it

console.log(arr, r+" is removed")

let p =arr.push(40) //it returns a new array length

console.log(arr, p, "is the length of a new array")

let s =arr.shift()
console.log(s, arr) //it removes first element and returns it

let u =arr.unshift(45) // it adds the new element and returns the length of an array
console.log(u, arr)