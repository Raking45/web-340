// Chatgpt 4 used for debugging
//  S-Skaggs @ https://github.com/S-Skaggs/web-340/blob/30db122869df0a6e7af16b4a4edae04273f519ad/week-7/fantasy-character-creation-stream/src/character-creator.js

"use strict";
const http = require('http');
const url = require('url');

// Create Character
const newCharacter = {
  characterClass: "",
  gender: "",
  funFact: ""
};

const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url, true);

  if (req.method === "POST") {
    if (pathname === "/create") {
      Object.assign(newCharacter, {
        characterClass: query.class,
        gender: query.gender,
        funFact: query.funFact
      });

      res.writeHead(201);
      res.end(`Created a ${newCharacter.characterClass} ${newCharacter.gender} ${newCharacter.funFact}.`);
      return;
    }

    if (pathname === "/confirm") {
      if (newCharacter.characterClass) {
        res.writeHead(200);
        res.end("Character has successfully been created!");
      } else {
        res.writeHead(501);
        res.end("Character was not successfully created.");
      }
      return;
    }
  }

  if (req.method === "GET" && pathname === "/view") {
    res.writeHead(200);
    res.end(`Class: ${newCharacter.characterClass} Gender: ${newCharacter.gender} Fun Fact: ${newCharacter.funFact}.`);
    return;
  }

  res.writeHead(404);
  res.end("Not Found");
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

module.exports = server;