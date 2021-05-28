const http =require('http');
const app =require('./Backend/app');


const server = http.createServer(app);
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://sahil:HTuU7ciTowPk08cs@cluster0.0hdw3.mongodb.net/chat?retryWrites=true&w=majority').
then(()=>{
    server.listen(3000,()=>{
        console.log("\x1b[35m","Connected to database and server started at 3000!")
    })
}).catch(err =>{
    console.log(err)
})



