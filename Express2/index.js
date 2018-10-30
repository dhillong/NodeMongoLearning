const express = require('express');
const app =express();
app.use(express.json());
let courses = [ {id: 0, name: 'Course0'},
                {id: 1, name: 'Course1'},
                {id: 2, name: 'Course2'},
                {id: 3, name: 'Course3'}]

app.get('/', (req, resp)=>{
    resp.send("Hello World");

});

app.get('/api/courses', (req, resp)=>{
    resp.send(courses); 
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


app.post('/api/courses', (req, resp)=>{
    const courseId = courses.length +1; 
    const course ={
        id : courseId,
        name : req.body.name + courseId
    }
    courses.push(course); 
    resp.send(courses); 
})

const port = process.env.PORT || '3000';
app.listen('3000', ()=>console.log('Listening on port : ' + port))