//for loop

let n =4
let sum=0
for(let i =0; i<n; i++){

    sum+= i
    
}

console.log(sum)

// console.log(i) will throw an error bcoz let i has block level scope

//for in loop
let obj = {

    harry: 40,
    shivi: 20,
    ritik: 60,
}

for(let a in obj){
    console.log("Marks of "+ a + " is " + obj[a])
}

//for of loop

for(let b of "Harry"){
    console.log(b);
}