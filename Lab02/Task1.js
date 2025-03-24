const fs = require("fs");
const os = require("os");

//Read json file asynchronously
fs.readFile("data.json", "utf8", (err, data) => {
  err
    ? console.error(err)
    : console.log("\n<<Json data using fs module>> \n", JSON.parse(data));
});

//read system information using os module
console.log("system information");
console.log(`System hostname : ${os.hostname()}`);
console.log(`tmp dir : ${os.tmpdir()}`);
console.log(`Platform : ${os.platform()}`);
console.log(`Release version : ${os.release()}`);
console.log(`Home dir name : ${os.homedir()}`);
console.log(`Network detail : ${os.networkInterfaces()}`);
console.log(`Arch " ${os.arch()}`);
