const fs = require("fs");

//Writing files using stream
const writeablestream = fs.createWriteStream(`writeStream.txt`);
writeablestream.write(`My stream file is succefully created -------->`);
writeablestream.end();

// Read file data using stream
const readablestream = fs.createReadStream(`writeStream.txt`, `utf-8`);

readablestream.on(`data`, (chunk) => {
  console.log(`Recieved value  ${chunk}`);
});

//writing files using Pipe stream
const writeStreamUsingPipe = fs.createWriteStream(`PipeStream.txt`);

//reading files using pips stream
const readStreamUsingPipe = fs.createReadStream(`writeStream.txt`);
readStreamUsingPipe.pipe(writeStreamUsingPipe);
