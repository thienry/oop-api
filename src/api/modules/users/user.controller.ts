import { Request, Response, NextFunction } from 'express'
import HttpController from '../../../commons/controllers/http.controller'

class UserController extends HttpController {
  getUser = async (req: Request, res: Response, next: NextFunction) => {
    return this.sendResponse(res, next, { name: 'Thiago', surname: 'Moura' })
  }
}

export default new UserController()
