//let & var will let you initialise a variable without assigning a value
//= is used to assign value(assignment operator))
var myName = "bhargavi";
let age = "10";
const email = "bhargavi@gmail.com";
let active = true; //boolean
let membership;
const date_created = null;
console.log("mynName", myName);
console.log(age);
console.log(email);
console.log(membership);
console.log(date_created);

// 5 primitive types : string, number, boolean, undefined, null

let age2 = 10;

//== & === are comparison operator
console.log("line 20", age === age2); // === strict type comparison
console.log("line 21", age == age2); // == will perform type coercion then check value

age = "random string";
console.log("age", age);
