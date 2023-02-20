import { Router } from 'express'
import { HelloWorldController } from '../../controllers/hello_world/hello_world_controller'

export const HelloWorldRouter = Router()

HelloWorldRouter.get('/', HelloWorldController)
