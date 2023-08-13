const mongoose = require("mongoose");
// connecting mongodb to localhost using uri
mongoose.connect('mongodb://127.0.0.1:27017/todo');
// checking mongo db working properly or not if not working consoling the err
mongoose.connection.on('open',(err)=>{
    if (err){
        console.log(err)
        return ;
    }
    console.log("connected to db successfully")
})
// exporing mongoose so that we can import and use in other files
module.exports = mongoose