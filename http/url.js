const url = require("url");
const myurl = "http://localhost:8000/?name=Node&age=15";

const pasrsedUrl = url.parse(myurl, true);

console.log(`${pasrsedUrl.query.name} \n${pasrsedUrl.query.age}`);
