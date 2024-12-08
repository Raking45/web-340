/* Sources: Chatgpt 4 utilized for debugging & code simplification,
            0x55dev @ https://github.com/0x55dev/web-340/blob/main/week-7/fantasy-character-creation-stream/test/character-creator.spec.js
            S-Skaggs @ https://github.com/S-Skaggs/web-340/blob/30db122869df0a6e7af16b4a4edae04273f519ad/week-7/fantasy-character-creation-stream/src/character-creator.js
*/

const { Duplex } = require('stream');

class CharacterCreator extends Duplex {
  constructor(options) {
    super(options);
    // TODO: Initialize your class here
    this.newCharacter = {
      class: "",
      gender: "",
      fact: ""
    };
    this.queue = [];
  }

  _write(chunk, encoding, callback) {
    // TODO: Implement your _write method here
    const sentCharacter = chunk.toString().trim().split(",");
    if(sentCharacter.length != 3) {
      callback(new Error("Invalid or missing character data"));
      return;
    }
    this.newCharacter.class = sentCharacter[0].trim();
    this.newCharacter.gender = sentCharacter[1].trim();
    this.newCharacter.fact = sentCharacter[2].trim();

    this.queue.push(`Created a ${this.newCharacter.class} who is a ${this.newCharacter.gender} and is ${this.newCharacter.fact}.`);
    callback();
  }

  _read(size) {
    // TODO: Implement your _read method here
    if(this.queue.length) {
      this.push(this.queue.shift() + "\n");
    } else {
      this.push(null);
    }
  }
}

module.exports = CharacterCreator;