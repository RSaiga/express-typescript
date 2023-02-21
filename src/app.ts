import express, { json, Router, urlencoded, type Response as ExResponse, type Request as ExRequest } from 'express'
import { RegisterRoutes } from '../build/routes'
import swaggerUi from 'swagger-ui-express'

export const app = express()
export const router = Router()
app.use(urlencoded({ extended: true }))
app.use(json())
app.use('/api/v1', router)
RegisterRoutes(router)

app.use('/docs', swaggerUi.serve, async (_req: ExRequest, res: ExResponse) => {
  return res.send(swaggerUi.generateHTML(await import('../build/swagger.json')))
})
