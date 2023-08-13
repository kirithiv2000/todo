const mongoose = require("../config/mongoose");
const {Schema} = mongoose
// creating new mongoose schema
const Todo = new Schema({
    todo:{
        type:String,
        required: true,

    },
    category:{
        type:String,
        required: true,
        enum: ['work', 'personal', 'school', 'cleaning','other'],
    },
    duedate:{
        type:Date,
        required: true,
    },
    
})
// creating model by schema
const todo = mongoose.model('todo',Todo);
module.exports = todo;