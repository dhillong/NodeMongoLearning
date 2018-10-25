const express =require('express');
const Joi =require('joi');
const joi = new Joi();
const app = express();

app.use(express.json());
const courses =[
    {id :1, name: 'course1' },
    {id :2, name: 'course2' },
    {id :3, name: 'course3' },
]
app.get('/', (req, res)=>{
    res.write('Hello World');
    res.end();
})

app.get('/api/courses/:id', (req, res)=>{
    const course = courses.find(c=>c.id ===parseInt(req.params.id));
    console.log("course : " + course);
    if(!course){
        res.status(404).send();    
    }
    res.send(course);
})

app.get('/api/courses', (req, res)=>{
    res.send(courses);
})

app.post('/api/courses', (req, res)=>{
    const schema ={
        name: Joi.string().min(3).max(15).required()
    }

    const result =Joi.validate(req.body, schema);

    if(result.error){
        res.status(400).send(result.error.details[0].message);
    }
    const courseId = courses.length+1;
    const course ={
        id :courseId,
        name: req.body.name
    }
    courses.push(course);
    res.send(courses);
})


const port = process.env.PORT || 3000;
app.listen(port);