const Option=require('../../../models/options');
const Question=require('../../../models/question');

module.exports.create=async function(req,res){
    try{
        let question = await Question.findById(req.body.question);

        if (question){
            let option = await Option.create({
                content: req.body.content,
                question: req.body.question
            })
            //push the option in array of options in question
            question.options.push(option);
            //after making changes push the save the question in db
            question.save();
           return res.status(200).json({
              data:{
              option:option,
              question:question
                },
              message:"option created"
          });

     }}catch(err){
        console.log('*******',err);
        return res.json(500,{
            message:"Internal server error"
        });
    }
}