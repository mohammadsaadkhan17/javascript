let marks = {

    harry: 40,
    rohan: 30,
    akash: 70
}

for(let key in marks){
    console.log("The marks of "+ key + " are " +marks[key])
}


const mean =(a,b,c,d) =>{
    return (a+b+c+d)/4
}

console.log(mean(2,3,4,5))