import { Response } from 'express'
import { Document } from 'mongoose'
import IParams from '../interfaces/params'

export default class HttpController {
  sendResponse(res: Response, next: Function, data: object, params?: IParams) {
    let { message = '', status = 200 } = params || {}
    res.status(status).json({ message, data })
    if (next) next()
  }
}
