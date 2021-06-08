const express = require('express');
const Joi =require('joi');
const app = express();
const auth =require("./auth");
const helmet =require('helmet');
const config =require('config');
//To automatically convert post body to object from json
app.use(express.json());
//built in middleware function to automatically convert x-www-form-urlencoded data to json in the controller
app.use(express.urlencoded({extended:true}));
// This middleware is used to display static content to website example can define static content example css in public folder and it will be 
// directly avaliable at root path. example. I have create readme.txt under public folder it can be accessed /localhost:3000/reademe.txt
app.use(express.static('public'));

//middleware function


const logIncomingRequest = function(req,resp , next){
    console.log(`Url : ${req.url} Method : ${req.method}`);
    //Next is used to forward request to next middleware function
    next();
}

app.use(logIncomingRequest);
// calling middleware function defined in auth.js file
app.use(auth);
app.use(helmet());

let courseIdCount =3;
let courses = [ {id: 0, name: 'Course0'},
                {id: 1, name: 'Course1'},
                {id: 2, name: 'Course2'},
                {id: 3, name: 'Course3'}]

app.get('/', (req, resp)=>{
    resp.send('hello world');
})

app.get('/api/courses', (req, resp) =>{
    resp.send(courses);
});

app.get('/api/example/:id', (req,resp) =>{
    //Query params
        resp.send(req.query);
    })
    
app.get('/api/courses/:year/:month', (req,resp) =>{
//Path variables    
    resp.send(req.params);
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

app.post('/api/courses', (req, resp)=>{
    
    const {value, error} =validateRequest(req.body);
    if(error){
        resp.status(400).send(error.details[0].message);
        return;
    }

    if(courses.find(c=>c.name ==req.body.name)){
        resp.status(400).send("Course arleady exist");
        return;
    }
    courseIdCount = courseIdCount +1;
    const course ={
        id : courseIdCount,
        name : req.body.name
    }
    courses.push(course);
    return resp.status(201).send(value);
});   

app.put('/api/courses/:id', (req, resp)=>{

    const course =courses.find(c=>c.id ===parseInt(req.params.id));
    if(!course){
        resp.status(404).send('Course not found');
    }
    const {value, error} =validateRequest(req.body);
    if(error){
        resp.status(400).send(error.details[0].message);
        return;
    }
    course.name =req.body.name;
    return resp.status(200).send(course);
})

app.delete('/api/courses/:id', (req, resp)=>{

    const course =courses.find(c=>c.id ===parseInt(req.params.id));
    if(!course){
        resp.status(404).send('Course not found');
    }
    const index =courses.indexOf(course);

    const courseDeleted =courses.splice(index, 1);
    return resp.status(200).send(courseDeleted);
})

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`listenig on port:  ${port}`));

function validateRequest(courses){
    const schema = Joi.object({
        name : Joi.string().max(25).min(2).required()
    });
    const result =schema.validate(courses);
    console.log(result);
    return result;
}