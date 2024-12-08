/* Sources: Chatgpt 4 utilized for debugging & code simplification,
            0x55dev @ https://github.com/0x55dev/web-340/blob/main/week-7/fantasy-character-creation-stream/test/character-creator.spec.js
            S-Skaggs @ https://github.com/S-Skaggs/web-340/blob/30db122869df0a6e7af16b4a4edae04273f519ad/week-7/fantasy-character-creation-stream/src/character-creator.js
*/

const CharacterCreator = require('../src/character-creator');

describe('CharacterCreator', () => {
  let characterCreator;

  beforeEach(() => {
    characterCreator = new CharacterCreator();
  });

  test("should process data correctly when written to", (done) => {
    // TODO: Write your test here
    const testCharacter = {
      class: "Mage",
      gender: "Male",
      fact: "Absent-minded"
    };

    const dataToWrite = `${testCharacter.class}, ${testCharacter.gender}, ${testCharacter.fact}`;
    const expectedOutput = `Created a ${testCharacter.class} who is a ${testCharacter.gender} and is ${testCharacter.fact}.`; 

    characterCreator.write(dataToWrite, "utf8", () => {
      characterCreator.on("data", (data) => {
        expect(data.toString().trim()).toBe(expectedOutput);
        done();
      });
    });
  });

  test("should emit 'error' when invalid data is written", (done) => {
    // TODO: Write your test here
    characterCreator.on("error", (err) => {
      expect(err.message).toBe("Invalid or missing character data");
      done();
    });
    characterCreator.write("");
  });

  test("should transform data correctly when written to", (done) => {
    // TODO: Write your test here
    const testCharacter = {
      class: "Mage",
      gender: "Male",
      fact: "Absent-minded"
    };

    const dataToWrite = `${testCharacter.class}, ${testCharacter.gender}, ${testCharacter.fact}`;
    const expectedOutput = `Created a ${testCharacter.class} who is a ${testCharacter.gender} and is ${testCharacter.fact}.`;

    characterCreator.write(dataToWrite, "utf8", () => {
      characterCreator.on("data", (data) => {
        expect(data.toString().trim()).toBe(expectedOutput);
        done();
      });
    });
  });
});