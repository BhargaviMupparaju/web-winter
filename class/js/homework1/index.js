const prompt = require("prompt-sync")();
// add function
var x = prompt("Enter first number: ", "0");
var y = prompt("Enter second  number: ", "0");
var num1 = parseInt(x);
var num2 = parseInt(y);
console.log("Sum of the numbers is", add(num1, num2));
function add(num1, num2) {
	return num1 + num2;
}

//divide function
console.log("Division  of the two numbers is", divide(num1, num2));
function divide(num1, num2) {
	if (num2 == 0) {
		console.log("Cannot divide with this number");
		return 0;
	} else {
		return num1 / num2;
	}
}

// convert fahrenheit to celsius
var fahrenheit = prompt("Enter temperature in fahrenheit : ", "0");
var num3 = parseInt(fahrenheit);
console.log("Temperature in Celsius is ", convert(num3));
function convert(num3) {
	return ((num3 - 32) * 5) / 9;
}

// divisible by 55
var isDivisible = prompt("Enter the number for divisibleby55:", "0");
var num4 = parseInt(isDivisible);
console.log("Temperature in Celsius is ", divisbleBy55(num4));

function divisbleBy55(num4) {
	if (num4 % 55 == 0) {
		console.log("The number is divisible by 55");
	} else console.log("The number is not divisible by 55");
}

// check length

var stringlen = prompt("Enter the string: ");
console.log("The string length is: ", checkLength(stringlen));

function checkLength(stringlen) {
	return stringlen.length;
}

// do concat on two strings

var string1 = prompt("Enter first string: ");
var string2 = prompt("Enter second string: ");
console.log("After concatenation: ", concat(string1, string2));

function concat(str1, str2) {
	return str1.concat(str2);
}
