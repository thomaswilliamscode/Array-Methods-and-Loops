// Question 1:
// Write a function called `doubleNumbers` that takes an array of numbers as input
// and returns a new array where each number is doubled. Use the `.map` method.

// Example:
// Input: [1, 2, 3, 4]
// Output: [2, 4, 6, 8]

// Your solution:
function doubleNumbers(numbersArray) {
	return numbersArray.map( ( num ) =>  ( num * 2 ) )
}

// Test your function
const numbersArray = [1, 2, 3, 4];
console.log(doubleNumbers(numbersArray));
