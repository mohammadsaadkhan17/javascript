let a = prompt("What is your age?");

a = Number.parseInt(a)

console.log(typeof a)
 
if(a < 0){
     alert("This is a invalid age?")
 }
else if(a < 9){
     alert("u cannot drive")
 }

 else{
    alert("This is an invalid age")
 }