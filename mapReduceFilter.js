
let arr =[56,78,77]

//When we want to create new array at that tym we will use map
let a =arr.map((value, index, array)=>{

    console.log(value, index, array)
    return value +1 
})

console.log(a)

//Array filter method

let b =arr.filter((a) =>{

    return a < 78
}) 

console.log(b)

console.log(arr);


let arr3 =[1,2,3,4,5]

// let reduced =arr3.reduce((h1, h2) =>{
//     return h1+h2;
// })

//oor

const reduce_func =(h1, h2) => {
    return h1 + h2 ;
}

let reduced =arr3.reduce(reduce_func)

console.log(reduced)