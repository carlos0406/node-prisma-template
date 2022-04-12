import { Request, Response } from 'express'

export class UserController {
  async teste(request: Request, response: Response) {
    return response.json({ teste: 'teste' })
  }
}
