const route = require("express").Router()
// requiring controllers so that we can use in routes
const {cerateNewTodo,deleteATodo} = require("../controller")
route.get("/create",cerateNewTodo)
// taking _id in params so it can be used in controller
route.get("/delete/:_id",deleteATodo)
module.exports = route