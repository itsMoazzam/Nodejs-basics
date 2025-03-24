const fs = require("fs");
// Creating new file
fs.writeFile(`Task2.txt`, "This is the file data", (err) => {
  err ? console.error(err) : console.log("successfully created file");
});
// append data in file

fs.appendFile(`Task2.txt`, " This is the append file data", (err) => {
  err ? console.error(err) : console.log(`data is successful append`);
});

//Read file
fs.readFile(`Task2.txt`, `utf-8`, (err, data) => {
  err ? console.error(err) : console.log(data);
});
delete file;
fs.unlink(`Task2.txt`, (err) => {
  err ? console.error(err) : console.log("succesfully deleted");
});
//Creating dir
fs.mkdir("testworking", (err) => {
  if (err) throw err;
});
// read dir
fs.readdir("testworking", (err, data) => {
  err ? console.error(err) : console.log(data);
});
// remove dir
fs.rmdir("testworking", (err) => {
  if (err) throw err;
});
