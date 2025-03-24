//Lab task1 to Print Hello world

console.log(`Hello world`);

console.log(`------------------------->>`);

// Lab Task2 from json prase slides
let jsonString = '{ "name": "Alice", "age": 22, "skills": ["HTML", "css"] }';
//converting json obj into js object
const JsString = JSON.parse(jsonString);

JsString.skills[2] = "js";

//converting js object into json object

console.log(JSON.stringify(JsString));
