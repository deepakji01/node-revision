// create server js

const express = require('express');

const app = express();

const bodyParser = require('body-parser');

// specially pass the json data and pass it through request.body
app.use(bodyParser.json());
//Activate the server
app.listen(3000,() =>{
    console.log("first server at 3000");
});

//Routes

app.get('/',(req, res)=>{
    res.send("hello sir how are you we are in homepage");
});

app.post('/api/cars',(req,res) =>{
    const {name, brand} = req.body;
    console.log(name);
    console.log(brand);
    res.send("Car Submitted");
});