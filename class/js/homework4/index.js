const prompt = require("prompt-sync")();

// // Question 1
var date = prompt("Enter the date", "0");
console.log("Discount result: ", checkDiscount(date));
function checkDiscount(date) {
	switch (date) {
		case "1":
			return "Too early";
			break;
		case "15":
			return "Here is your discount";
			break;
		case "30":
			return "Too late";
			break;
		default:
			return "Not a valid date";
	}
}

// Question 2

var num1 = parseInt(prompt("Enter first number", "0"));
var num2 = parseInt(prompt("Enter second number", "0"));
var result = [];
console.log("The final array: ", checkNumbers(num1, num2));
function checkNumbers(num1, num2) {
	var firstend = num1 + 1;
	while (firstend < num2) {
		result.push(firstend++);
	}
	return result;
}

//Question 3
const myObject = {
	name: "Jack",
	email: "jack@gmail.com",
	age: 30,
};
var arr = [];
console.log("The result keys are :", getKeys(myObject));
function getKeys(myObject) {
	arr.push(Object.keys(myObject));
	return arr;
}

//Question 4

const arr1 = [315, 50, 314, 684, 100, 648, 132, 50, 98, 45];
console.log("The maximum profit is: ", checkProfit(arr1));
function checkProfit(arr1) {
	var maxprofit = 0;
	var minbuyprice = Infinity;

	for (let i = 0; i < arr1.length; i++) {
		if (minbuyprice > arr1[i]) {
			minbuyprice = arr1[i];
		}
		var profit = arr1[i] - minbuyprice;

		if (profit > maxprofit) {
			maxprofit = profit;
		}
	}
	return maxprofit;
}
