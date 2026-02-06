
let marks =[34,45,67,89,null, "abc"]

console.log(marks[0])
console.log(marks[1])
console.log(marks[2])
console.log(marks[3])
console.log(marks[4])
console.log(marks[5])
console.log(marks[6]) //bcoz nothing is there at index 6

marks[6] =10 //Adding an value to an array

console.log(marks.length)


marks[0] = 44 //Updating value of an array

console.log(marks)

for(let i=0; i<=marks.length; i++){
    console.log(marks[i])
}