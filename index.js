const express = require('express');
const db=require('./config/mongoose');
const port=8000;/** On port 80 all website hosts */
/*app listen to the port*/

const app = express();





app.listen(port,function(err){
    if(err){
        console.log('Error: ',err);
        /*interpolition
        console.log(`Error in running : ${err}`);
        */
    }
    console.log(`server is running on port${port}`);
});