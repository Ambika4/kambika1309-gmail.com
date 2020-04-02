const mongoose = require('mongoose');

//schema for the option
const optionSchema= new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    //option belongs to a question also
    question:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Question'
    }
    })
//the is a collection i.e is a model
const Option=mongoose.model('Option',optionSchema);
//exported the model
module.exports=Option;