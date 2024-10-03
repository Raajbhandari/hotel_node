const mongoose=require('mongoose')

const personSchema=new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age:
    {
        type: Number
    },
    work:{
        type :String,
        enum: ['chef', 'waiter', 'manager'],
        require: true
    }
    ,
    salary: {
        type: Number
    }
    ,
    email: {
        type: String,
        required: true,
        unique : true
    }


})

// create person model

const person=mongoose.model('person',personSchema);
module.exports=person
