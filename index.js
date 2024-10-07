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

// Define an array of numbers that includes 20
const maxCheckSet = [3, 5, 8, 12, 17, 20]; // Example numbers including 20

// Calculate the maximum number in the array
const max = Math.max(...maxCheckSet); // This will return 20

// Export all variables together for testing
module.exports = { num1, num2, multiply, random, num3, num4, mod, max };

