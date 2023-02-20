import express from 'express'
import { HelloWorldRouter } from './hello_world/hello_world_router'

export const router = express.Router()
router.use('/', HelloWorldRouter)
