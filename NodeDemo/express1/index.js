const express = require('express');
const Joi =require('joi');
const app = express();


//To automatically convert post body to object from json
app.use(express.json());
let courses = [ {id: 0, name: 'Course0'},
                {id: 1, name: 'Course1'},
                {id: 2, name: 'Course2'},
                {id: 3, name: 'Course3'}]

app.get('/', (req, resp)=>{
    resp.send('hello world');
})

app.get('/api/courses', (req, resp) =>{
    resp.send([1,2,4]);
});
app.get('/api/courses/:year/:month', (req,resp) =>{
//Path variables    
    resp.send(req.params);
})

app.get('/api/courses/example/:id', (req,resp) =>{
//Query params
    resp.send(req.query);
})

app.get('/api/courses/:id', (req,resp) =>{
    //Query params
    const course =courses.find(c=>c.id === parseInt(req.params.id));
    console.log(course);
    if(course){
        resp.send(course);
    }else{
        resp.status(404).send('Course not found');
    }

    })
const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`listenig on port:  ${port}`) );


