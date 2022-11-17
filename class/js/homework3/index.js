const prompt = require("prompt-sync")();

//Question 1

const calendarArray = ["Jan", "Feb", "Mar"];
const dateArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var result = [];
console.log("The result array is: ", printCalendar(calendarArray, dateArray));
function printCalendar(calendarArray, dateArray) {
	for (let i = 0; i < calendarArray.length; i++) {
		for (let j = 0; j < dateArray.length; j++) {
			console.log(calendarArray[i][j]);
			result.push(calendarArray[i].concat(dateArray[j]));
		}
	}
	return result;
}

//Question 2
const inputarray = [1, 2, 3, 4, 5, 6];
var outputarray = [];
console.log("The cloned array is: ", cloneArray(inputarray));

function cloneArray(inputarray) {
	for (let i = 0; i < inputarray.length; i++) {
		outputarray[i] = inputarray[i];
	}
	return outputarray;
}

//Question 3
var arr5 = [2, 3, 1, 5, 6, 7, 8, 10];
var n = prompt("Enter the position", "0");
console.log("Element: ", getNthElement(arr5, n));
var element;

function getNthElement(arr5, n) {
	if (n < arr5.length) {
		return arr5[n];
	} else {
		return "Element does not exist";
	}
}

//Question 4
arr6 = [1, 2, 3, 4];
var item = prompt("Enter item", "0");
var idx = arr6.length - 1;
console.log("Result of custom push ", customPush(arr6, item));
console.log("Result of custom pop ", customPop(arr6));

function customPush(arr6, item) {
	arr6[++idx] = item;
	return arr6.length;
}

function customPop(arr6) {
	if (idx > 0) {
		return arr6[idx--];
	}
}
