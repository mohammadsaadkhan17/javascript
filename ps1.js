//Q1 Create a variable of type string and try to add a number to it

let a ="Hello"
let b =100

console.log(a+b)

//Q2 
console.log("Type of a="+typeof a)
console.log("Type of b="+typeof b)

console.log(typeof (a+b))

//Q3

const student = {

    name: "Harry",
    age: 20,
    address: "Indore"
}

// student = 20 it will throw an error

//Q4 
student['friend'] = "Shubham"          //But we can update or add the fields in the const objects but we cannot directly assign the values as shown in above line
student['name'] = "code with Harry"
console.log(student)

//Q5
const dict = {
    appreciate: "recognize the full worth of.",
    ataraxia: "a state of freedom from emotional disturbance and anxiety",
    yakka: "work, especially hard work."
}

console.log(dict)