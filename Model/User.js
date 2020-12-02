import mongoose from 'mongoose'

// UserSchma declared with databse validation
const UserSchema= new mongoose.Schema({
    first_name:{
        type:String,
        required:true
    },

    last_name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },

    phone:{
        type:String,
        required:true
    },

    password:{
        type:String,
        required:true
    },

    created_at:{
        type:Date,
        default:Date.now
    }
})

//User model creation 
const User=mongoose.model('User',UserSchema)

export {User}