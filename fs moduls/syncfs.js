const fs = require("fs");

//Writing file using Sync fs
fs.writeFileSync(`File.txt`, `Hello World!`);

//Read file using Sync fs
let data = fs.readFileSync(`File.txt`, `utf-8`);
console.log(data);
