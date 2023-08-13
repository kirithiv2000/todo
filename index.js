const express = require("express");
const app = express()
const port = 8000
const route = require("./routes")
// setting up ejs
app.set("view engine","ejs");
app.set("views","./view")
// setting up asserts folder
app.use(express.static("./assert"))
// to get req.body, req.query, req.params we need to deprecate body-parser  
app.use(express.urlencoded())
// connecting the routes from routes directery
app.use('/',route)
// listening to the port and checking in the port is running successfully or not 
app.listen(port,(err)=>{
    if (err){
        console.log(err)
        return ;
    }
    console.log("successfully running in port",port)
})