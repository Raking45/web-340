/**
 * Author:
 * Date:
 * File Name:
 * Description:
 */

"use strict";

const { bakePie } = require("../src/pie");

// Your tests here
describe("bakePie function", () => {
  let mockExit;
  let mockWarn;

  beforeAll(() => {
    mockExit = jest.spyOn(process, "exit").mockImplementation(() => {});
    mockWarn = jest.spyOn(console, "warn").mockImplementation(() => {});
  });

  afterAll(() => {
    mockExit.mockRestore();
    mockWarn.mockRestore();
  });

  it("should return a success message when all essential ingredients are included", () => {
    const pieType = "apple";
    const ingredients =["flour", "sugar", "butter", "apples"];
    const result = bakePie(pieType, ingredients);
    expect(result).toBe("Successfully baked a apple pie with flour, sugar, butter, apples.");
    expect(mockWarn).not.toHaveBeenCalled();
    expect(mockExit).not.toHaveBeenCalled();
  });

  it("should return a success message for pies with extra ingredients", () => {
    const pieType = "blueberry";
    const ingredients = ["flour", "sugar", "butter", "blueberries"];
    const result = bakePie(pieType, ingredients);
    expect(result).toBe("Successfully baked a blueberry pie with flour, sugar, butter, blueberries.");
    expect(mockWarn).not.toHaveBeenCalled();
    expect(mockExit).not.toHaveBeenCalled();
  });

  it("should call process.exit(1) if an essential ingredient is missing", () => {
    const pieType = "cherry";
    const ingredients = ["flour", "sugar"];
    const mockExit = jest.spyOn(process, "exit").mockImplementation(() => {});
    const mockWarn = jest.spyOn(console, "warn").mockImplementation(() => {});

    bakePie(pieType, ingredients);

    expect(mockWarn).toHaveBeenCalledWith("Error: Missing essential ingredient: butter.");
    expect(mockExit).toHaveBeenCalledWith(1);
  });

});