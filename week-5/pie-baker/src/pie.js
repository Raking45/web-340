/**
 * Author:  Robert King
 * Date:    November 24, 2024
 * File Name: pie.js
 * Description:  Pie bake function with an array of essential ingredients.
 */
"use strict";

function bakePie(pieType, ingredients) {
  // Your code here
  const essentialIngredients = ["flour", "sugar", "butter"];
  const missingIngredients = essentialIngredients.filter(
    ingredient => !ingredients.includes(ingredient)
  );

  if (missingIngredients.length > 0) {
    console.warn(`Error: Missing essential ingredient${missingIngredients.length > 1 ? "s" : ""}: ${missingIngredients.join(" , ")}.`);
    process.exit(1);
  }
    
  
  return `Successfully baked a ${pieType} pie with ${ingredients.join(", ")}.`;
}

module.exports = { bakePie };