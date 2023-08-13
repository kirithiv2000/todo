const express = require("express");
const route = express.Router()
const routewithview = require("./routeswithview");
const routewithoutview = require("./routeswithoutview");
// route with ui
route.use('/home',routewithview);
// routes without ui
route.use('/api',routewithoutview);
module.exports = route;