const route = require("express").Router()
const {findAllTodos} = require("../controller")
// using findAllTodos as middleware
route.get("/",findAllTodos,(req,res)=>{
    return res.render('home',{
        colorForButtons:{
            personal:"green",
            school:"blue",
            work:"purple",
            other:"#D6DF00",
            cleaning:"orange",
        },
        todoList:req.allTodo})
})
// exporting routes so that it can be used in express app
module.exports = route;