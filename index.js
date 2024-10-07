// Question 1

// Define num1 and num2
//let num1 = 31; // Example factor of 62
//let num2 = 62 / num1; // Calculate the other factor

// Calculate the multiplication result
//const multiply = num1 * num2;

// Export the variables for testing
//module.exports = { num1, num2, multiply };


// Question 2

// Function to generate a random integer greater than 0
//function generateRandom() {
//    return Math.floor(Math.random() * 100) + 1; // Generates a number between 1 and 100
//}

// Define num1 and num2
//let num1 = 31; // Example factor of 62
//let num2 = 62 / num1; // Calculate the other factor

// Calculate the multiplication result
//const multiply = num1 * num2;

// Generate a random number
//const random = generateRandom();

// Export the variables for testing
//module.exports = { num1, num2, multiply, random };

// Question 3

// Function to generate a random integer greater than 0
function generateRandom() {
    return Math.floor(Math.random() * 100) + 1; // Generates a number between 1 and 100
}

// Define num1 and num2
let num1 = 31; // Example factor of 62
let num2 = 62 / num1; // Calculate the other factor

// Calculate the multiplication result
const multiply = num1 * num2;

// Generate a random number
const random = generateRandom();

// Define num3 and num4 such that num3 % num4 equals 4
let num3 = 10; // Example value
let num4 = 6;  // Example value

// Calculate the remainder
const mod = num3 % num4; // This should equal 4

// Export the variables for testing
module.exports = { num1, num2, multiply, random, num3, num4, mod };

// Question 4

// Define an array of numbers that includes 20
//const numbers = [3, 5, 8, 12, 17, 20, 23]; // Example numbers

// Calculate the maximum number in the array
//const max = Math.max(...numbers); // This will return 23
// If you specifically want to test for 20, ensure the array includes 20.
// To fulfill your test condition, ensure that 20 is included in your max check.
// Here is a more explicit approach:
const maxCheckSet = [3, 5, 8, 12, 17, 20]; // Array to check if 20 is the max
const max = Math.max(...maxCheckSet); // This should return 20

// Export the max variable for testing
module.exports = { max: Math.max(...numbers) };
