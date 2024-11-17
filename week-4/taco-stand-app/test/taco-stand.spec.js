/**
 * Author:    Robert King
 * Date:      November 17, 2024
 * File Name: taco-stand.spec.js  
 * Description:  Test suite for the TacoStandEmitter class.
 * Sources:  Chat-GPT 4 used to help debug.  Comments next to areas suggested by Chat-GPT.
 */

"use strict";

const assert = require("assert");
const TacoStandEmitter = require("../src/taco-stand"); //Changed tacoStand to taco-stand.
const tacoStand = new TacoStandEmitter();

// TODO: Write tests for the TacoStandEmitter methods
//

function testServeCustomer() {
  try {
    tacoStand.removeAllListeners();
    tacoStand.on("serve", (customer) => {
      assert.strictEqual(customer, "John", "Customer should be 'John'");
    });

    tacoStand.serveCustomer("John");
    console.log("Passed testServeCustomer");
    return true;
  } catch(err) {
    console.error(`Failed testServeCustomer: ${err.message}`);
  }
}

function testPrepareTaco() {
  try {
    tacoStand.removeAllListeners(); //Clears any listeners prior to testing.
    tacoStand.on("prepare", (taco) => {
      assert.strictEqual(taco, "beef", "Taco should be 'beef'");
    });

    tacoStand.prepareTaco("beef");
    console.log("Passed testPrepareTaco");
    return true;
  } catch(err) {
    console.error(`Failed testPrepareTaco: ${err.message}`);
  }
}

function testHandleRush() {
  try {
    tacoStand.removeAllListeners();
    tacoStand.on("rush", (rush) => {
      assert.strictEqual(rush, "lunch", "Rush should be 'lunch'");
    });

    tacoStand.handleRush("lunch");
    console.log("Passed testHandleRush");
    return true;
  } catch(err) {
    console.error(`Failed testHandleRush: ${err.message}`);
  }
}

// Call Test Functions

testServeCustomer();
testPrepareTaco();
testHandleRush();