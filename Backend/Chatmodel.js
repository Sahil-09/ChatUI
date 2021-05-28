const mongoose = require('mongoose');
const Schema= mongoose.Schema;
const Chat=new Schema({
    from:String,
    message:String
})


module.exports = mongoose.model('Chat',Chat)