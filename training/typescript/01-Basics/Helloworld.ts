console.log("Hello World");
console.log("Coding Gurus! " + "Time for some fun!");

// Variable - Strictly Typed
let found: boolean = true;
let grade: number = 88.6;
let firstName: string = "Eliakin";
let lastName: string = "Del Rosario";

// CANNOT REASSIGN WITH DIFFERENT VALUE TYPE
/*
found = 0;
grade = "A";
firstName = false;
*/

console.log(found);
console.log("The grade is " + grade);
console.log("Hi " + firstName + " " + lastName);
// use template Strings
console.log(`Hi ${firstName} ${lastName}`);
