"use strict";

/**
 * This file allows you to choose between using callbacks or promises (async/await) for handling asynchronous operations.
 *
 * If you want to use callbacks:
 * 1. Uncomment the 'fs' require statement under the "For callbacks" comment.
 *
 * If you want to use promises (async/await):
 * 1. Uncomment the 'fs' require statement under the "For promises" comment.
 */

// For callbacks:
// const fs = require('fs');

// For promises:
const fs = require('fs').promises;

describe("Character Creation Module", () => {
  let createCharacter;
  let getCharacters;

  beforeEach(() => {
    jest.resetModules();
    
    // TODO: Set up your mocks here
    jest.spyOn(fs, "readFile").mockResolvedValue(() => Promise.resolve("Wizard\nMale\nAbsent-Minded\n"));
    jest.spyOn(fs, "writeFile").mockResolvedValue();

    ({ createCharacter, getCharacters } = require('../src/character-creation'));
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  // TODO: Write your tests here. You should have at least three tests:
  // 1. Test that createCharacter writes a new character to the file
  test("writes character to the file", async () => {
    await createCharacter(["Wizard", "Male", "Absent-Minded"]);
    expect(fs.writeFile).toHaveBeenCalledWith(expect.any(String),"Wizard\nMale\nAbsent-Minded\n", "utf-8");
  });

  // 2. Test that getCharacters reads characters from the file
  test("read character data from a file", async () => {
    fs.readFile.mockResolvedValue("Wizard\nMale\nAbsent-Minded\n");
    const characterData = await getCharacters();
    expect(characterData).toEqual(["Wizard", "Male", "Absent-Minded"]);
  });

  // 3. Test that createCharacter handles errors when writing to the file
  test("handles errors when reading character data", async () => {
    fs.readFile.mockRejectedValue(() => Promise.reject(new Error("File not found")));
    await expect(getCharacters()).rejects.toThrow("Failed to Read Character: ");
  });

  // 4. Test for Corrupted Character Data
  test("handles corrupted file data", async () => {
    fs.readFile.mockResolvedValue("Wizard\n\nAbsent-Minded\n");
    const characterData = await getCharacters();
    expect(characterData).toEqual(["Wizard", "Absent-Minded"]);
  });
});