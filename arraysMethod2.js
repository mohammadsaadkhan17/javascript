
let num =[1,2,3,4,5,6,7,8,9]
let num2 =[555,3464,1236,7445,867,1]
let num3 =[8,6,5,1,2,3]

let newArray = num.concat(num2, num3)
console.log(newArray)

console.log(num2, num3)


console.log(num2.sort()) // it sorts alphabetically

let compare =(a,b) =>{

    return a-b     //for sorting in asc order
}

num.reverse()

console.log(num2.sort(compare))

let arr3 =[34,56,76,87,89]

let deletedValues =arr3.splice(2, 3, 101, 102, 103, 104, 105) //remove 3 elements from 2nd index and add remaining and returns deleted values

console.log(arr3)

console.log(deletedValues)

let newArr =arr3.slice(5)

console.log(newArr)

let newArr2 =arr3.slice(2,4)

console.log(newArr2)