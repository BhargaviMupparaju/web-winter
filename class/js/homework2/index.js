const prompt = require("prompt-sync")();
//Write a function that takes in an age (number)
var x = prompt("Enter the age: ", "0");
console.log(checkAge(x));
function checkAge(age) {
	if (age >= 65) return "Special discount";
	else return "Not Allowed";
}

//Write a function that takes in an array of numbers and use the forEach() or map() to multiply every number by 100.
var arr = [];
var size = 5;
console.log("Enter elements");
for (var i = 0; i < size; i++) {
	arr[i] = prompt("Element element " + i);
}
console.log("The array is :", arr);
console.log("The result array is: ", multiplyarray(arr));
var result = [5];

function multiplyarray(arr) {
	result = arr.map((element) => {
		return element * 100;
	});

	return result;
}

//Write a function that takes in an array of numbers and use the forEach() or map() to multiply every number by 100 if the array provided to the function has a length greater than 5.

var arr2 = [];
var size = prompt("Enter the size: ", "0");
var arr3 = [];
for (var i = 0; i < size; i++) {
	arr2[i] = prompt("Element element " + i);
}
console.log("The final array is: ", checksizeMutliply(arr2));

function checksizeMutliply(arr2) {
	if (size > 5) {
		arr3 = arr2.map((element) => {
			return element * 100;
		});
	} else {
		return arr2;
	}
	return arr3;
}

//only if the number is even - if the number is odd then it will return the original number .

console.log("The final array is: ", checkEvenorOdds(arr2));

function checkEvenorOdds(arr2) {
	arr2.forEach((element) => {
		if (element % 2 == 0) {
			arr3.push(element * 100);
		} else {
			arr3.push(element);
		}
	});
	return arr3;
}

// number of times 154 occurred or existed in that array.

var arr4 = [154, 657, 564, 561, 154, 678, 100, 154];
let count = 0;
console.log("The count is: ", checkCount(arr4));

function checkCount(arr4) {
	arr4.forEach((element) => {
		if (element === 154) {
			count += 1;
		}
	});
	return count;
}

//check type
var input = [1, 2, 3];
console.log("The result is: ", checkType(input));

function checkType(input) {
	const result = Array.isArray(input);
	const checkobject = Object.is(input);

	if (result) {
		return "object";
	} else {
		return "It's something else";
	}
}
