const assert = require('assert');
const calculateDistance = require('../src/distance-calculator');

// Implement Test Functions

function testEarthToMars() {
  try {
    const expectedDistance = 0.524;
    assert.strictEqual(calculateDistance('Earth', 'Mars'), expectedDistance);
    console.log('testEarthToMars passed');
    return true;
  } catch (error) {
    console.error(`Failed testEarthToMars: ${error.message}`);
  }
}

function testVenusToJupiter() {
  try {
    const expectedDistance = 4.48;
    assert.strictEqual(calculateDistance('Venus', 'Jupiter'), expectedDistance);
    console.log('testVenusToJupiter passed');
    return true;
  } catch (error) {
    console.error(`Failed testVenusToJupiter: ${error.message}`);
  }
}

function testEarthToPluto() {
  try {
    const expectedDistance = 38.482;
    assert.strictEqual(calculateDistance('Earth', 'Pluto'), expectedDistance);
    console.log('testEarthToPluto passed');
    return true;
  } catch (error) {
    console.error('Failed testEarthToPluto: ${error.message}');
    return false;
  }
}

function testInvalidPlanet() {
  try {
    calculateDistance('Earth', 'Satarius');
    console.error('testInvalidPlanet failed: No error thrown for invalid planet');
    return false;
  } catch (error) {
    console.log('Test invalid planet passed');
    return true;
  }
}

// Call Test Functions

testEarthToMars();
testVenusToJupiter();
testEarthToPluto();
testInvalidPlanet();