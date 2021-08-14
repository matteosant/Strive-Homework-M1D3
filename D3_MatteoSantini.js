/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or de-commenting the single exercises in this one.
You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.

*/
/* EXERCISE 1
Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

let myAnswer1 = `
First of all what is a datatype? You can see as way that the computer use to categorize everything that we give to it. 
If we give the computer a variable that is equal to 8, the computer will see it
as a number. So the datatype of that variable will be Number. There are six datatypes in Javascript, that are called primitives:
1) Number; 2)Boolean; 3)undefined 4)String; 5)Symbol 6)BigInt. Don't worry about the last two, we will see them later on. Boolean is a logical datatype
that can have only the  values of true or false. for example: my eyes are brown, this statement can only be either true or false. So a variable that is
boolean can only be true or false. We create a boolean telling the computer that a variable is true or false. 
if we want to give the computer a word or a sentence, we have to but it between double quote: "" or single quote'', and the computer will classify it
as a Strings. even if we put numbers inside a string like so: "43" the computer will see it as a string, because it is in between the double quotes.
undefined is simply a variable that has no value, a variable that we give to the computer but we have not told him what it is yet. 

`

console.log(`Answer 1: ` + myAnswer1)

/* EXERCISE 2
Try to describe what a variable is, in your own words.
*/
let myAnswer2 = `
A variable is like a container where we put stuff that we want to use in our code. The computer take our containers and it stores them in
its memory. To create a variable we have to declare it using a language that the computer understands. with javascript we declare a variable by 
using "let" and the name of our variable (it can be anykind of name but it should be chosen in a way that it makes sense). 
For example: "let myName". now I declared a variable called myName. Now I can give it a value: myName = "Matteo". 
now every time I use the variable myName the computer knows first of all that it is a string, because its between. "", 
and that it is equal to "Matteo". 

`

console.log(`Answer 2: ` + myAnswer2)
/* EXERCISE 3
Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/
let sum = 12 + 20
console.log(`Answer 2: `+sum)



/* EXERCISE 4
Create a variable named x containing the number 12.
*/

let x = 12
console.log(`Answer 4: `+ x)

/* EXERCISE 5
Create a variable called name containing the string John Doe.
*/

let myFriend = `John Doe`
console.log(`Answer 5: ` + myFriend)

/* EXERCISE 6
Execute a subtraction between the number 12 and the variable x, which is storing the value 12.
*/

let subtraction1 = 12 - x
console.log(`Answer 6: ` + subtraction1)

/* EXERCISE 7
Create two variables: name1 and name2. name1 is equal to john, name2 is equal to John.
Verify that name1 is different from name2. 
Verify then, that name1 and name2 are equals if both lowercase (without changing the value of name2).
*/

let name1 = `john`
let name2 = `John`
console.log(`Answer 7: `)
console.log(name1===name2)
let name3 = `john`
console.log(name1===name3)

/* EXERCISE 8
Create a variable named x (its value must be less than 10). Write the code to print the literal value of x (ex.: if x is 1 print "one", if 5 print "five" etc.).
*/
console.log(`Answer 8: `)

let x = 9 
if (x===9 && x < 10){
    console.log(`Nine`)
} 

/* EXERCISE 9
[Extra] Insert a value in a variable based on the resut of a ternary if (topic not covered during lesson, try to search it by yourself, tomorrow morning we'll discuss it together ;) )
*/

let canIdrinkAlcoholInTheUS;

let myAge = 19
(myAge <= 21)? console.log(canIdrinkAlcoholInTheUS = `Yes`) : console.log(canIdrinkAlcoholInTheUS = `no`)

const canIdrinkAlcoholInTheUS = myAge <= 21 ? "no" : "yes"
console.log(canIdrinkAlcoholInTheUS)

/* WHEN YOU ARE FINISHED
Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/