const http =require('http');
const app =require('./Backend/app');


const server = http.createServer(app);
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://sahil:HTuU7ciTowPk08cs@cluster0.0hdw3.mongodb.net/chat?retryWrites=true&w=majority').
then(()=>{
    app.set('port',process.env.PORT || 4001);
    server.listen(process.env.PORT || 4001,()=>{
        console.log("Connected to database and server started at 4001!")
    })
}).catch(err =>{
    console.log(err)
})



