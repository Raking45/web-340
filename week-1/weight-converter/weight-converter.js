/**
 * Author:  Robert King
 * Date:  October 27, 2024
 * File Name:  weight-converter.js
 * Description:  A Node.js script that converts pounds to kilograms using command-line argument.
*/

"use strict";

// TODO: Implement the weight conversion logic here

/* Notes: process.argv is an array that contains the command-line arguments and the array is part of the process object, a global object.
process.argv[0] is "node" (path to Node.js executable) and 
process.argv[1] (path to JavaScript flie being executed) is the script name "weight-converter.js"
process.argv[2] first user argument */

// Main Function for the Program
function main() {

// Check if Argument is Provided
if (process.argv.length < 3) {
    // Print Error Message to stderr that Displays Correct Usage of weight-converter.js Script
    console.error("stderr: Usage: node weight-converter.js <pounds>");
    process.exit(1)
}

// Get the Pounds Argument from the Command-Line (First User-Provided Argument)
const pounds = process.argv[2];
// Validate User Input is a Number
if (isNaN(pounds)) {
    // Print Error Message to stderr that Indicates User-Provided Argument must be a Number
    console.error("stderr: Input must be a number.");
    process.exit(1);
}

/* Convert Pounds to Kilograms using Conversion Factor (1 Pound = 0.453592 Kilogram)
Using parseFloat Allows User to Enter Numbers with Decimals */
const kilograms = parseFloat(pounds) * 0.453592;

// Print Resulting Conversion to Console to Hundredth Place
console.log(`${pounds} is equal to ${kilograms.toFixed(2)} kilograms.`);
}

// Call the Main Function
main();