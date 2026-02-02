function onePlusAvg(x, y){

    return 1+(x+y)/2;
}

const hello = () =>{
    console.log("Hello there...")
}

const hi = () =>{
    console.log("Hi there...")
    return "hi"
}

//this is an arrow function
const sum = (p,q)=>{
    return p+q;
}

let a =1;
let b =2;
let c =3;

console.log("One plus average of a and b is "+ onePlusAvg(a,b))
console.log("One plus average of b and c is "+ onePlusAvg(b,c))
console.log("One plus average of c and a is "+ onePlusAvg(c,a))
console.log("Sum=" +sum(a,c))

hello()

let v = hi()

console.log(v)