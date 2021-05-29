const express = require('express');
const Chat = require('./Chatmodel')
const app = express();
const path=require("path");


app.use("/",express.static(path.join(__dirname,"angular")))

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type,X-Requested-With,Origin,Accept,auth"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,POST,PUT,DELETE,UPDATE,PATCH"
    );
    next();
  });

app.get('/chat',(req,res)=>{
    Chat.find().then(data=>{
        res.status(200).send(data)
    }).catch(err=>{
        console.log(err)
    })
})


module.exports = app