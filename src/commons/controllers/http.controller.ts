import { Response } from 'express'

export default class HttpController {
  sendResponse(res: Response, next: Function, data: any, params?: any) {
    let { message = '', status = 200 } = params || {}
    res.status(status).json({ message, data })
    if (next) next()
  }
}
