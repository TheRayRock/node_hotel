const mongoose = require('mongoose');

//url connection
const mongoURL = 'mongodb://localhost:27017/yourDatabase3383';

mongoose.connect(mongoURL, {
    useUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.on('connected', () =>{
    console.log('connected to mongodb server')
})

db.on('error', (err) =>{
    console.log(' mongodb connection error')
})

db.on('disconnected', () =>{
    console.log('mongodb is discoonected')
})

module.exports =
db; 