const EventEmitter = require("events");
const emitter = new EventEmitter();

//register an listener
emitter.on('messageLogged', function(){
    console.log("event called");
})

// raise an event
emitter.emit('messageLogged')

//register an listener which accepts arguments 
emitter.on('messageLogged2', function(arg){
    console.log("event called with args : ",  arg );
})

// raise an event
emitter.emit('messageLogged2',{id : 1, url : 'https:/'});


//register an listener which accepts arguments with arrow function
emitter.on('messageLogged3', arg => {
    console.log("event called with args : ",  arg );
})

// raise an event
emitter.emit('messageLogged3',{id : 2, url : 'https://google.ca'});