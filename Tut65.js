
// Syncronous or Blocking
// -line by line execution

// Asyncronous or Nonblocking
// -line by line execution not guaranteed
// - callbacks will fire

const fs = require("fs");
fs.readFile("dele.text", "utf-8", ( data) => {
    console.log( data);
});
console.log("This is a message ");