const express = require("express")
const UsersController = require("../controllers/UsersController")
const UsersRouter = express.Router()


UsersRouter.post('/register', UsersController.createUser)
UsersRouter.post('/checkAccount', UsersController.checkAccount)
UsersRouter.post('/login', UsersController.login)

// UsersRouter.get('/', UsersController.getAll)
// UsersRouter.post('/', UsersController.getOne)
// UsersRouter.get('/:id', UsersController.updateOne)
// UsersRouter.delete('/:id', UsersController.deleteOne)
// UsersRouter.delete('/', UsersController.deleteAll)

module.exports = UsersRouter