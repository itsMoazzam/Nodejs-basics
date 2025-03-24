const EventEmmiter = require("events");
const eventEmmiter = new EventEmmiter();
eventEmmiter.on(`greet`, () => {
  console.log(`Hello, This is and event --->`);
});

eventEmmiter.emit("greet");
