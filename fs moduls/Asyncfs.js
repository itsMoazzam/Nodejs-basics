const fs = require("fs");

// Creating files using Async programing in js
fs.writeFile(`Async.txt`, `Hello Async programing ------->`, (err) => {
  if (err) throw err;
  console.log(`file is successfully saved --->!`);
});

// Reading files using Async programing in js

fs.readFile(`Async.txt`, `utf-8`, (err, data) => {
  if (err) console.error(`Error reading files`, err);
  console.log(data);
});

//Deleting files using Async

fs.unlink(`async.txt`, (err) => {
  err ? console.error(err) : console.log(`file has been deleted`);
});

//Creating Dir using fs module
fs.mkdir(`Eventloop`, (err) => {
  err ? console.error(err) : console.log(`successfully created directory`);
});
