const fs = require("fs");
let text = fs.readFileSync("dele.text","utf-8");
text = text.replace("browser", "Basit");

console.log("The content of the file is ");
console.log(text);

console.log("Creating a new file .......");
fs.writeFileSync("Basit.text",text);