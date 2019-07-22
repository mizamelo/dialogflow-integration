const routes = require("express").Router();

// Import all controller
const controllers = require("./app/controllers");

// Write all routes
routes.post("/", controllers.initController.index);

module.exports = routes;
