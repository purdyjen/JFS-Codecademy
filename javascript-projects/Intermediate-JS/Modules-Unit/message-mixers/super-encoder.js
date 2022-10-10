/*
From Codecademy's Learn Intermediate Javascript, Modules Unit:
https://www.codecademy.com/learn/learn-intermediate-javascript
*/

// Import the encryptors functions here.
const encryptors = require("./encryptors.js");
const caesarCipher = encryptors.caesarCipher;
const symbolCipher = encryptors.symbolCipher;
const reverseCipher = encryptors.reverseCipher;

const encodeMessage = (str) => {
  // Use the encryptor functions here.
  const pass1 = caesarCipher(str, 8);
  const pass2 = symbolCipher(pass1);
  const finalPass = reverseCipher(pass2);
  return finalPass;
};

const decodeMessage = (str) => {
  // Use the encryptor functions here.
  const pass1 = reverseCipher(str);
  const pass2 = symbolCipher(pass1);
  const finalPass = caesarCipher(pass2, -8);
  return finalPass;
};

// User input / output.

const handleInput = (userInput) => {
  const str = userInput.toString().trim();
  let output;
  if (process.argv[2] === "encode") {
    output = encodeMessage(str);
  }
  if (process.argv[2] === "decode") {
    output = decodeMessage(str);
  }

  process.stdout.write(output + "\n");
  process.exit();
};

// Run the program.
process.stdout.write("Enter the message you would like to encrypt...\n> ");
process.stdin.on("data", handleInput);
