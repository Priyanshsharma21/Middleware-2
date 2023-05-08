import mongoose from 'mongoose'


const { Schema, model } = mongoose

const userSchema = await Schema({
    name: {
        type : String,
        required: true
    },
	balance:{
        type : Number,
        required: true
    }, 
	address:{
        type : String
    },
	age: {
        type : String
    },
 	gender: {
        type : String
    }, // Allowed values are - “male”, “female”, “other”
	isFreeAppUser: {
        type : Boolean
    } // Default false value.
})


const User = model('User',userSchema)

export default User