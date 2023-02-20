import { type Request, type Response } from 'express'

export const HelloWorldController = (req: Request, res: Response): Response => {
  return res.send('Hello World!')
}
