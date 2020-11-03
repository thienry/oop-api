import express from 'express'
import Async from '../middlewares/async.middlewares'

export default class BaseRouter {
  private router: express.Router
  controller: any

  constructor() {
    this.router = express.Router({ mergeParams: true })
  }

  get(path: string, fn: Function, ...middlewares: any[]) {
    this.router.get(path, middlewares, Async(fn.bind(this.controller)))
  }

  getRouter() {
    return this.router
  }
}
