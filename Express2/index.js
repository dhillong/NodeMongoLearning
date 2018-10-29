const express = require('express');
const app =express();
let courses = [ {id: 1, name: 'Course1'},
                {id: 2, name: 'Course2'},
                {id: 3, name: 'Course3'}]

app.get('/', (req, resp)=>{
    resp.send("Hello World");

});

app.get('/api/courses', (req, resp)=>{
    resp.send( [1,2,3,4]); 
})

app.get('/api/courses/:id', (req, resp)=>{
    const course =courses.find(c=>{return c.id === parseInt(req.params.id)})
    if(!course){
        resp.status(404).send("Course Not found");
    }
    resp.send(course); 
})


app.get('/api/courses/:year/:month', (req, resp)=>{
    resp.send( req.query); 
})



const port = process.env.PORT || '3000';
app.listen('3000', ()=>console.log('Listening on port : ' + port))