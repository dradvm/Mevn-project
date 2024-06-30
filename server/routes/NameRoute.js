const express = require("express");
const NameController = require("../controllers/NameController")


const router = express.Router()
router.get("/", NameController.findAll);
router.delete("/:id", NameController.delete)
module.exports = router