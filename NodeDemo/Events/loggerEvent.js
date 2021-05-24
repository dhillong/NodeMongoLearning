const Event = require('events');
var url="https://logger.io/log"

//defined Logger class 
class Logger extends Event {
    log(message){
        console.log(message);
        this.emit('messageLogged',{id : 1, url : 'https:/'});
    }

}

module.exports = Logger;  