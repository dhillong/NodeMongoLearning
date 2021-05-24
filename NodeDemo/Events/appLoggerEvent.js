const Logger = require('./loggerEvent');
const logger = new Logger();

logger.on('messageLogged', (arg)=>{
    console.log("event called with args : ", arg);
});

logger.log('message');