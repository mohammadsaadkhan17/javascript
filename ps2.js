//Q1

let age = 40

if(age>= 18 && age<=35){
    console.log("Your age lies between 18 and 35")
}
else{
    console.log("Your age doesn't lies between 18 and 35 ")
}

//Q2

let day = "Monday"

switch(day){
    case "Monday":
        console.log("Its friday")

        break;

    case "Tuesday":
        console.log("Its friday")

        break;

    case "Wednesday":
        console.log("Its friday")

        break;

    case "Thursday":
        console.log("Its friday")

        break;

    case "Friday":
        console.log("Its friday")

        break;

        default:
            console.log("No match")
} 

//Q3

let number =18

if(number%2 == 0 && number % 3 == 0){

    console.log("Yes, the given number is divisible by 2 and 3")
}
else{

    console.log("The number is not divisible")
}

//Q4

let myAge =30

let result = myAge >= 18 ? "Yes, you can drive": "No, you cannot drive"

console.log(result)