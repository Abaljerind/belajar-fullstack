const events = require("events");
const eventEmitter = new events.EventEmitter();

// membuat sebuah event handler
let myEventHandler = function () {
  console.log("Aku mendengar sebuah teriakan!");
};

// menugaskan event handler ke sebuah event
eventEmitter.on("scream", myEventHandler);

//menjalankan event 'scream' nya
eventEmitter.emit("scream");
