/**
 * Author:    Robert King
 * Date:      November 17, 2024
 * File Name: index.js
 * Description:  CLI for interacting with Taco Stand.
 * Sources:  Chat-GPT 4 used to help debug.  Comments next to areas suggested by Chat-GPT.
 */

"use strict";

const readline = require("readline");
const TacoStandEmitter = require("./taco-stand"); //Changed tacoStand to taco-stand.

const tacoStand = new TacoStandEmitter();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// TODO: Set up event listeners for the tacoStand object
tacoStand.on("serve", (customer) => {
  console.log(`Taco Stand serves: ${customer}`);
});

tacoStand.on("prepare", (taco) => {
  console.log(`Taco Stand prepares: ${taco} taco`);
});

tacoStand.on("rush", (rush) => {
  console.log(`Taco Stand handles rush: ${rush}`);
});

rl.on("line", (input) => {
  const [command, ...args] = input.split(" ");
  const argument = args.join(""); //Combine args array into a single string.

  // TODO: Handle the commands
switch(command) {
  case "serve":
    tacoStand.serveCustomer(argument);
    break;
  case "prepare":
    tacoStand.prepareTaco(argument);
    break;
  case "rush":
    tacoStand.handleRush(argument);
    break;
  default:
    console.log(`Unkown Command: ${command}`);
  }
});

console.log(`Enter a command: "serve", "prepare", or "rush", followed by a space and the argument.`);