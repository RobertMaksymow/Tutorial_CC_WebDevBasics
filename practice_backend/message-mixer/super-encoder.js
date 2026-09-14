// To encode run in terminal: node super-encoder.js encode
// To decode run in terminal: node super-encoder.js decode

const {
  caesarCipher,
  symbolCipher,
  reverseCipher,
} = require("./encryptors.js");

const encodeMessage = (str) => {
  return reverseCipher(symbolCipher(caesarCipher(str, 8)));
};

const decodeMessage = (str) => {
  return caesarCipher(symbolCipher(reverseCipher(str)), -8);
};

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

process.stdout.write("Enter the message: \n> ");
process.stdin.on("data", handleInput);
