/**
 * Author:  Robert King
 * Date:    November 3, 2024
 * File Name:   index.js
 * Description:  Import functions from recipes.js using require, declares ingredients as an array, and
 * implements command-line interface to demonstrate functionality.  
*/

// TODO: Import your module using require
const { createRecipe, setTimer, quit } = require("./recipes.js");

// Array of Ingredients
const ingredients = [
    "flour",
    "sugar",
    "butter",
    "egg",
    "potato",
    "bacon",
    "onion",
    "cheese",
    "salt",
    "pepper",
    "ham"
]

// TODO: Implement your CLI program here
console.log(createRecipe(ingredients));
console.log(setTimer(10));
console.log(quit());