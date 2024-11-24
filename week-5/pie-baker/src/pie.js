/**
 * Author:
 * Date:
 * File Name:
 * Description:
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