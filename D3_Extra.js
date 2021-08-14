// Additional assignments for Day 3

/*
 1. Use ternary operator to assign "male" or "female" string to a variable based on the value of another 'isMale' variable
*/
let isMale = true
let John
John = (isMale)? "male" : "female"
/*
 2. Write code to check from two given integers whether one of them is 8 or their sum or difference is 8.
*/

 let int1 = 3
 let int2 = 5

 if (int1 === 8 || int2===8 || int1 - int2 === 8 || int2 + int1 === 8){
     console.log(`affermative`)
 } else { 
     console.log(`negative`)
}


/*
  3. Create a variable which concatenates two strings.
*/
let myStreetAdress = `Via` + ` Mar Tirreno`
console.log(myStreetAdress)
/*
4.Write a JavaScript conditional statement to sort three numbers. Display the result in the console.
*/
let num1=32
let num2=21
let num3=4

if (num1>num2 && num1>num3 && num2>num3){
    console.log(num1, num2, num3)
}
/*
 5. Write code to find the average of two given integers.
*/
let int3 = 12
let int4 = 22
let avarage = (int3 + int4)/2
console.log(avarage)
/* 
  6. Find the longest of two given strings
*/

/*
 7. Write code to check whether a value is an integer or not.
*/

/*
 8. Write code to calculate the percentage (%) of a number.
        Ex.: 20% of 400 is 80
*/

/*
 9. Write code to check if a given number is even or odd.*/
 let num4 = 5
 if (5%2===1){
     console.log(`the number is odd`)
 } else if (5%2===0){
     console.log(`the number is even`)
 }