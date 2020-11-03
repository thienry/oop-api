import { Request, Response, NextFunction } from 'express'
import HttpController from '../../../commons/controllers/http.controller'

class BootcampController extends HttpController {
  getBootcamps = async (req: Request, res: Response, next: NextFunction) => {
    return this.sendResponse(res, next, { name: 'Thiago', surname: 'Moura' })
  }
}

export default new BootcampController()
