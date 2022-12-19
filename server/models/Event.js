const  { Schema, model } = require('mongoose');
const mongoose = require('mongoose')

 const EventSchema  = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{type:String},
    date:{type:String,required:true},
    user:{
        type:mongoose.Schema.ObjectId,
        ref:'User',
        required:true
    }

    });
    const Event = model("Event", EventSchema);

    module.exports = Event;
    