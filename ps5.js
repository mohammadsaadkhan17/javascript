
//Q1
let arr =[3,4,5,6,1,2]


console.log(arr.push(10))

console.log(arr)

//Q2

let arr2 =[100,20,3,4,45,70]

let a = arr2.filter((n) =>{

    return n % 10 == 0
})

console.log(a)

//Q3 

let arr3 =[2,4,5,7]

let c = arr3.map((b) =>{

    return b*b;

})

console.log(c)

//Q4

let arr4 =[1,2,3,4,5]

let d =arr4.reduce((x1, x2) => {

    return x1*x2
})

console.log(d);