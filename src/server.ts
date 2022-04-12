import { UserController } from '@controllers/UserController'
import express from 'express'

const app = express()

const userController = new UserController()
app.get('/', userController.teste)
app.listen(3333)
