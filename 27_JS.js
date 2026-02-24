
alert("Enter the value of a")

let a =prompt("Enter value here","11") //here we are giving 11 as a default value
a= Number.parseInt(a);
//document.write(a)

alert("You entered a of type "+ typeof a) //It will type always string whether it is a no or string u have to cinvert no to get type integer

document.write(a);

let write =confirm("Do you really want to write?")

if(write){

    document.write(a)

}

else{

document.write("Please allow me to write")

}