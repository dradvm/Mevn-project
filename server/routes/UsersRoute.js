const express = require("express")
const UsersController = require("../controllers/UsersController")
const UsersRouter = express.Router()


UsersRouter.post('/register', UsersController.createUser)

UsersRouter.post('/login', UsersController.login)

UsersRouter.get('/', UsersController.getAll)
UsersRouter.post('/checkAccount', UsersController.checkAccount)

UsersRouter.get('/:email', UsersController.getUserByEmail)
UsersRouter.post('/:email', UsersController.updateUser)
// UsersRouter.get('/:id', UsersController.getUserById)
// UsersRouter.post('/:id', UsersController.updateUser)



module.exports = UsersRouter