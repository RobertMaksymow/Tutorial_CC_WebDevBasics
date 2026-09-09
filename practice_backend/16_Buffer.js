// import the Buffer module
const { Buffer } = require("buffer");

// allocate buffer of size 15 filled with 'b'
const bufferAlloc = Buffer.alloc(15, "b");

// create buffer1 with 'Node' and buffer2 with '.js'
const buffer1 = Buffer.from("Node");
const buffer2 = Buffer.from(".js");
// combine buffer1 and buffer2
const bufferArray = [buffer1, buffer2];
const bufferConcat = Buffer.concat(bufferArray);
// translate buffer to string
const bufferString = bufferConcat.toString();
// uncomment the appropriate `console.log()` to ouput to console
console.log(bufferAlloc);
console.log("Buffer 1:", buffer1, "Buffer 2:", buffer2);
console.log(bufferConcat);
console.log(bufferString);
