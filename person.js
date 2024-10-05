const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50
    },
    age: {
        type: Number,
        required: true,
        min: 0,
        max: 120
    },
    phone:{
        type: Number,
        require: true,
    },
    work:{
        type: String,
        enum: ['chef','waiter','manager'],
        require: true
    }
     
})

const Person = mongoose.model('Person', personSchema);
module.exports = Person;