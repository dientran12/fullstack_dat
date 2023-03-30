const express = require("express");
const routers = express.Router();
const control = require("../controller/controller.js");

routers.get("/", control.getAll);
routers.post("/add", control.create);
routers.put("/update/:id", control.update);
routers.delete("/:id", control.delete);

module.exports = routers;
