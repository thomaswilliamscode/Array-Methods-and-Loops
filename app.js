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
// 	if ( array.indexOf(target) < 0) {
// 		return -1
// 	} else {
// 		return array.indexOf(target);
// 	}
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
// function capitalizeNames(names) {
// 	let newArray = []
// 	names.forEach ( ( name ) => {
// 		name = name.toLowerCase();
// 		let upperCase = name[0].toUpperCase()
// 		let lowerCase = name.slice(1)
// 		let fixedName = upperCase + lowerCase

// 		newArray.push( fixedName)
// 	} ) 
// 	return newArray
// }

// // Test your function
// const names = ['john', 'JANE', 'jIm', 'SaRaH'];
// console.log(capitalizeNames(names));



// Question 7:
// Write a function called `countOccurrences` that takes an array of elements and a target element as input,
// and returns the number of occurrences of the target element in the array.
// Use any array method of your choice.

// Example:
// Input: [1, 2, 3, 4, 2, 2, 3, 1], 2
// Output: 3

// Your solution:
// function countOccurrences(array, target) {
//   let count = 0;
//   array.map( (element) => {
// 	if ( element === target ) {
// 		count++
// 	}
//   } )
//   return count
  
// }

// // Test your function
// const elements = [1, 2, 3, 4, 2, 2, 3, 1];
// const targetElement = 2;
// console.log(countOccurrences(elements, targetElement));





// Question 8:
// Write a function called `reverseArray` that takes an array as input
// and returns a new array with the elements in reverse order.
// Use any array method of your choice.

// Example:
// Input: [1, 2, 3, 4, 5]
// Output: [5, 4, 3, 2, 1]

// Your solution:
// function reverseArray(array) {
//   let newArray = []
//   array.forEach( ( element ) => newArray.unshift( element ))
//   return newArray
// }

// // Test your function
// const inputArray = [1, 2, 3, 4, 5];
// console.log(reverseArray(inputArray));






// Question 9:
// Write a function called `getAverage` that takes an array of numbers as input
// and returns the average (mean) of those numbers.
// Use any array method or loop of your choice.

// Example:
// Input: [1, 2, 3, 4, 5]
// Output: 3

// Your solution:
// function getAverage(numbers) {
//   let sum = 0;
//   let divide = numbers.length
//   numbers.forEach ( ( num ) => sum += num)

//   return sum / divide
  
// }

// // Test your function
// const numbers = [1, 2, 3, 4, 5];
// console.log(getAverage(numbers));



// Question 10:
// Write a function called `checkPalindrome` that takes a string as input
// and returns `true` if the string is a palindrome (reads the same forwards and backwards),
// and `false` otherwise.
// Use any array method or loop of your choice.

// Example:
// Input: 'racecar'
// Output: true

// Your solution:
// function checkPalindrome(string) {
//   let backwards = []
//   let stringArray = string.split('')
//   stringArray.forEach((letter) => backwards.unshift( letter ) );
//   if ( backwards.join('') ===  string ) {
// 	return true
//   } else {
// 	return false
//   }
  
// }

// Test your function
// const inputString = 'racecar';
// console.log(checkPalindrome(inputString));



