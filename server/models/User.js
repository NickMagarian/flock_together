const  { Schema, model } = require('mongoose');
const mongoose = require('mongoose')



const { Schema, model } = require('mongoose');

const UserSchema = new Schema ({
    name: {
        type: String,
        trim: true,
        required: "Username is required!",
        unique: true,
    },
    email: {
        type: String,
        index: {
            unique: true,
            partialFilterExpression: {email:"string"}
        },
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    },
   password:String,


});


UserSchema.virtual('events',{
    ref:'Event',
    localField:'_id',
    foreignField:'user',
    justOne:false
})
const User = model('User', UserSchema);

module.exports = User;
