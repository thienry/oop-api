import express, { Application } from 'express'

import Database from '../commons/database/Database'
import Router from '../api/routes'

class App {
  express: Application
  private database = new Database()
  private router = new Router()

  constructor() {
    this.express = express()
    this.database.connect()

    this.middlewares()
    this.routes()
  }

  private middlewares() {
    this.express.use(express.json())
  }

  private routes() {
    this.router.initialize(this.express)
  }
}

export default new App().express
