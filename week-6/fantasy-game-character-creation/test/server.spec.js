// Chatgpt 4 used for debugging
//  S-Skaggs @ https://github.com/S-Skaggs/web-340/blob/30db122869df0a6e7af16b4a4edae04273f519ad/week-6/fantasy-game-character-creation/test/server.spec.js

"use strict";
const http = require('http');
const server = require('../src/server');

// Create test Suite
describe("server", () => {
  // After all tests close the server
  afterAll(() => {
    server.close();
  });

  // Using the done argument in a Jest test
  // Will make Jest wait until the done callback is called before finishing the test.
  test("responds to /confirm POST request no character", done => {
    // Create options object
    const options = {
      hostname: "localhost",
      port: 3000,
      path: "/confirm",
      method: "POST"
    };

    // Create the request object
    const req = http.request(options, res => {
      let data = "";

      // Create listener for response data event
      res.on("data", chunk => {
        data += chunk;
      });

      // Create listener for response end event
      res.on("end", () => {
        expect(res.statusCode).toBe(501);
        expect(data).toBe("Character was not successfully created.");
        done();
      });
    });
    req.end();
  });

  test("responds to /create POST request with query parameter", done => {
    const options = {
      hostname: "localhost",
      port: 3000,
      path: "/create?class=Mage&gender=Male&funFact=absent-minded",
      method: "POST"
    };

    const req = http.request(options, res => {
      let data = "";

      res.on("data", chunk => {
        data += chunk;
      });

      res.on("end", () => {
        expect(res.statusCode).toBe(201);
        expect(data).toBe("Created a Mage Male absent-minded.");
        done();
      });
    });
    req.end();
  });

  test("responds to /confirm POST request", done => {
    const options = {
      hostname: "localhost",
      port: 3000,
      path: "/confirm",
      method: "POST"
    };

    const req = http.request(options, res => {
      let data = "";

      res.on("data", chunk => {
        data += chunk;
      });

      res.on("end", () => {
        expect(res.statusCode).toBe(200);
        expect(data).toBe("Character has successfully been created!");
        done();
      });
    });
    req.end();
  });

  test("responds to /view GET request", done => {
    http.get("http://localhost:3000/view", res => {
      let data = "";

      res.on("data", chunk => {
        data += chunk;
      });

      res.on("end", () => {
        expect(res.statusCode).toBe(200);
        expect(data).toBe("Class: Mage Gender: Male Fun Fact: absent-minded.");
        done();
      });
    });
  });

});