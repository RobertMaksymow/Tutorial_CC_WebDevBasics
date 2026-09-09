const readline = require("readline");
const fs = require("fs");

const myInterface = readline.createInterface({
  input: fs.createReadStream("17_ShoppingList.txt"),
});

const printData = (data) => {
  console.log(`Item: ${data}`);
};

myInterface.on("line", printData);
