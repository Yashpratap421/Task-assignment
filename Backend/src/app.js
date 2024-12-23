const express = require('express')
const taskModel = require('./model/taskModel.js')
const userModel = require('./model/userModel.js')
const adminModel = require('./model/adminModel.js')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const app = express()

app.use(cors({
    origin: "*",
    credentials:true,
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("Public"))
app.use(cookieParser())

app.get('/',(req,res)=>{

    // res.send(req.cookies.token)
})
app.get('/taskprovide',async (req,res)=>{
    let tasks = await taskModel.find()
    res.send(tasks)
})
app.get('/users',async (req,res)=>{
    let users = await userModel.find()
    console.log(req.cookies.token)
    res.send(users)
})

app.post('/user/register',async (req,res)=>{
    bcrypt.genSalt(10, (err, salt)=>{
        bcrypt.hash(req.body.password, salt, async (err,hash)=>{
            let user = await userModel.create({
                name: req.body.name,
                email: req.body.email,
                password: hash,
            })
            res.send(user)
            let token = jwt.sign({email: user.email, userid: user._id}, "shasha");
            console.log(token)
            // res.cookie("token","heelo");
        })
    })
})
app.post('/user/login',async (req,res)=>{
    let user =await userModel.findOne({email: req.body.email})
    res.send(user)
    // if(!user) return res.send("something went to wrong")
    //     bcrypt.compare(req.body.password, user.password, (err, result)=>{
    //     if(result){
    //         let tokenvalue = req.body.email
    //         let token = jwt.sign({tokenvalue}, "shasha");
    //         res.cookie("token", token);
    //         res.send("You are login")
    //     }
    //     else res.send("login failed")
    // }) 
})
app.post('/admin/login',async (req,res)=>{
    if(req.body.email == "admin@me.com" && req.body.password == "123"){
        let user = {email: "admin@me.com" , password: "123"}
    }
    // if(!user) return res.send("something went to wrong")
    //     bcrypt.compare(req.body.password, user.password, (err, result)=>{
    //     if(result){
    //         let tokenvalue = req.body.email
    //         let token = jwt.sign({tokenvalue}, "shasha");
    //         res.cookie("token", token);
    //         res.send("You are login")
    //     }
    //     else res.send("login failed")
    // }) 
})
app.post("/logout",(req,res)=>{

})

app.post('/create',async (req,res)=>{
        let task = await taskModel.create({
        title: req.body.taskName,
        description: req.body.description,
    })
    console.log(task)
    res.redirect('/taskprovide')
    
})
app.post('/remove',async (req,res)=>{
    let taskid = req.body.taskId;
    const result = await taskModel.findOneAndDelete({ _id: taskid});
    console.log(result)
    res.redirect('/taskprovide')
})
app.post('/accepte',async (req,res)=>{
    let taskid = req.body.taskId;
    await taskModel.findOneAndUpdate({_id: taskid}, {status: "Active"}, {new: true});
})

function isLoggedin(req, res, next) {
    const token = req.cookies.token;
    if (!token) return res.status(401).send("You must be logged in");

    try {
        const data = jwt.verify(token, "password"); // Replace with environment secret
        req.user = data;
        next();
    } catch (error) {
        res.status(403).send("Invalid token");
    }
}

app.listen(8000,()=>{
    console.log("Server is work done !")
})