const mongoose = require("mongoose")

mongoose.connect(`mongodb://127.0.0.1:27017/tasksystem`)

const taskSchema = mongoose.Schema({
    title: String,
    description: String,
    status:{
        type:String,
        enum: ["accepted","Active","Completed"],
        default: "accepted",
    },
})

module.exports = mongoose.model("task",taskSchema)