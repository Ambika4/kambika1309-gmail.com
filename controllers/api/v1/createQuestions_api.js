const Option=require('../../../models/options');
const Question=require('../../../models/question');

module.exports.create=async function(req,res){
    try{
        let question= await Question.create({
            content:req.body.content
        })
        return res.status(200).json({
            data:{
              question:question
            },
            message:"question created"
          });

    }catch(err){
        console.log('*******',err);
        return res.json(500,{
            message:"Internal server error"
        });
    }
}