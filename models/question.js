const mongoose = require('mongoose');

//schema for the question
const questionSchema= new mongoose.Schema({
    content:{
        type:String,
        required:true,
     },
   
    //include the id of the array of the all options in this question schema itself
    option:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Option'
        }
    ]
});

//the is a collection i.e is a model
const Question=mongoose.model('Question',questionSchema);
module.exports=Question;