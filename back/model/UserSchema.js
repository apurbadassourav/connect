const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema ({
    firstname:String,
    lastname:String,
    email:String,
    phone:String,
    password:String,
})
module.exports = mongoose.model("Alluser",userSchema)