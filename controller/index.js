// importing mongoose todo schema so that we can use it in controller
const {todo} = require("../model")

// find all todo function as a middleware
const findAllTodos = async(req,res,next)=>{
    const all = await todo.find({})
    req.allTodo = all
    next()
}

// create a new todo and store in db
const cerateNewTodo = async(req,res)=>{
    const newTodo =  await todo.create(req.query)
    return res.redirect("back");
}

// delete a todo by _id( unique id)
const deleteATodo = async(req,res)=>{
    await todo.findOneAndDelete({_id: req.params._id})
    return res.redirect("back");
}
// export all the controller functions
module.exports = {
    cerateNewTodo,
    findAllTodos,
    deleteATodo,
}