const express = require('express');
const Chat = require('./Chatmodel')
const app = express();

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

app.get('/',(req,res)=>{
    Chat.find().then(data=>{
        res.status(200).send(data)
    }).catch(err=>{
        console.log(err)
    })
})


module.exports = app