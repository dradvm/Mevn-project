const express = require("express");
const NameController = require("../controllers/NameController")


const NameRouter = express.Router()
NameRouter.get("/", NameController.findAll);
NameRouter.delete("/:id", NameController.delete)
module.exports = NameRouter