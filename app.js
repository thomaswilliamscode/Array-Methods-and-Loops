// Question 1:
// Write a function called `doubleNumbers` that takes an array of numbers as input
// and returns a new array where each number is doubled. Use the `.map` method.

// Example:
// Input: [1, 2, 3, 4]
// Output: [2, 4, 6, 8]

// Your solution:
// function doubleNumbers(numbersArray) {
// 	return numbersArray.map( ( num ) =>  ( num * 2 ) )
// }

// // Test your function
// const numbersArray = [1, 2, 3, 4];
// console.log(doubleNumbers(numbersArray));

// Question 2:
// Write a function called `getEvenNumbers` that takes an array of numbers as input
// and returns a new array containing only the even numbers. Use the `.filter` method.

// Example:
// Input: [1, 2, 3, 4, 5, 6]
// Output: [2, 4, 6]

// Your solution:
// function getEvenNumbers(numbers) {
//   return numbers.filter ( ( num ) =>  ( num % 2 === 0 ) )
  
// }

// // Test your function
// const numbers = [1, 2, 3, 4, 5, 6];
// console.log(getEvenNumbers(numbers));


// Question 3:
// Write a function called `sumArray` that takes an array of numbers as input
// and returns the sum of all the numbers. Use either a loop or any array method of your choice (`forEach`, `reduce`, etc.).

// Example:
// Input: [1, 2, 3, 4, 5]
// Output: 15

// Your solution:
// function sumArray(numbers) {
// 	let sum = 0
// 	numbers.forEach ( ( num ) => sum += num)
// 	return sum
  
// }

// // Test your function
// const numbers = [1, 2, 3, 4, 5];
// console.log(sumArray(numbers));



// Question 4:
// Write a function called `findIndex` that takes an array of strings and a target string as input,
// and returns the index of the first occurrence of the target string in the array.
// If the target string is not found, return -1. Use the appropriate array method for this task.

// Example:
// Input: ['apple', 'banana', 'cherry', 'date'], 'banana'
// Output: 1

// Your solution:
// function findIndex(array, target) {
// 	let length = array.length
// 	foundTarget = false
// 	let pos = 0
//   array.filter ( ( string, index ) => {
// 	pos++
// 	if ( string === target ) {
// 		foundTarget = true
// 		return array.indexOf(target)
// 	}
// 	if ( !foundTarget ) {
// 		return -1
// 	}
//   })
  
// }

// // Test your function
// const strings = ['apple', 'banana', 'cherry', 'date'];
// const targetString = 'banana';
// console.log(findIndex(strings, targetString));




// Question 5:
// Write a function called `removeDuplicates` that takes an array of numbers as input
// and returns a new array with all the duplicate numbers removed.
// The order of the numbers should be preserved. Use any array method of your choice.

// Example:
// Input: [1, 2, 3, 2, 4, 3, 5, 6, 1]
// Output: [1, 2, 3, 4, 5, 6]

// Your solution:
// function removeDuplicates(numbers) {
//   let newArray = []
//   numbers.map ( ( num ) => {
// 	if ( !newArray.includes ( num ) ) {
// 		newArray.push( num )
// 	}
//   } ) 
//   return newArray
  
// }

// // Test your function
// const numbers = [1, 2, 3, 2, 4, 3, 5, 6, 1];
// console.log(removeDuplicates(numbers));


// Question 6:
// Write a function called `capitalizeNames` that takes an array of names as input
// and returns a new array where each name is capitalized (the first letter is uppercase and the rest are lowercase).
// Use any array method of your choice.

// Example:
// Input: ['john', 'JANE', 'jIm', 'SaRaH']
// Output: ['John', 'Jane', 'Jim', 'Sarah']

// Your solution:
function capitalizeNames(names) {
  // TODO: Your code here
  
}

// Test your function
const names = ['john', 'JANE', 'jIm', 'SaRaH'];
console.log(capitalizeNames(names));



