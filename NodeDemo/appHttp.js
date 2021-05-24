const http = require('http');

const server =http.createServer();

// this will execute when you hit the server on port 3000 on 
/*
server.on('connection', (socket)=>{
    console.log('new Connection')    
})
*/
server.on('connection', (req, res)=>{
    if(req.url ='/'){
        res.send("Hello")
        console.log('Response sent')    
    }

})
server.listen(3000);
console.log('listening on port 3000');