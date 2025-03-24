const EventEmmiter = require("events");
const eventEmmiter = new EventEmmiter();
//listen the event named task
eventEmmiter.on(`Task`, () => {
  console.log(`My task is successfully working --->`);
});
//triger the event

eventEmmiter.emit("Task");
