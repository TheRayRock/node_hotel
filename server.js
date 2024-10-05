const express = require('express');
const { size } = require('lodash');
const app = express();
const db = require('./db');
const person = require('./model/person');
const Menu = require('./model/MenuItem');

const bodyParser = require('body-parser');
const { connect } = require('mongoose');
app.use(bodyParser.json());

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to my hotel... How can I help you?');
});

app.post('/person', async (res, res) => {
    try{
        const data = req.body

        const newPerson = new person(data);

        const responce =  await newPerson.save();
        console.log('data saved');
        res.statusCode(200).json(responce);

    }catch(err){
        console.log(err);
        res.statusCode(500).json({error: 'internal sever error'});

    }
    
})


app.post('/Menu', async (res, res) => {
    try{
        const data = req.body

        const newMenu = new MenuItem(data);

        const responce =  await newMenu.save();
        console.log('data saved');
        res.statusCode(200).json(responce);

    }catch(err){
        console.log(err);
        res.statusCode(500).json({error: 'internal sever error'});

    }
    
})

app.get('/Menu', async (res, res) => {
    try{
        const data =  await MenuItem.find();
        console.log('data fetched');
        res.statusCode(200).json(data);

    }catch(err){
        console.log(err);
        res.statusCode(500).json({error: 'internal sever error'});

    }
    
})
    
// Start the server on port 3784
app.listen(3784, () => {
    console.log('Server is running on port 3784');
});

//connect added for testing purpose