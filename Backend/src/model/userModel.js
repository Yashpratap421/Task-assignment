const mongoose = require("mongoose")

mongoose.connect(`mongodb://127.0.0.1:27017/tasksystem`)

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    
    activetask:{
        type: Number,
        default: 0,
    }
})

module.exports = mongoose.model("user",userSchema)