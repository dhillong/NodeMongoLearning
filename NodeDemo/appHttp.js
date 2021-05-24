const http = require('http');

const server =http.createServer();

// this will execute when you hit the server on port 3000 on 
server.on('connection', (socket)=>{
    console.log('new Connection')    
})

server.listen(3000);
console.log('listening on port 3000');