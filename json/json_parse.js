//converting json object into js object

let jsonstring = '{ "name": "Alice", "age": 22, "skills": ["HTML", "css"] }';
let jsonobj = JSON.parse(jsonstring);

console.log("js object :", jsonobj);
console.log(jsonobj.name, jsonobj.name);
console.log(jsonobj.skills[1]);

//Converting js object into json object
let student = {
  name: "Bob",
  age: 22,
  enrolled: true
};
let Conversion = JSON.stringify(student);
console.log(Conversion);
