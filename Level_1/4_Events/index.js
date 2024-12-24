const logEvents = require("./logevents");


const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', (message) => {
  logEvents(message);
});
myEmitter.emit('event' , "log event emitted");