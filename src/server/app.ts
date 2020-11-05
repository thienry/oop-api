import express, { Application } from 'express'
import morgan from 'morgan'

import Database from '../database/Database'
import Router from '../api/routes'

class App {
  express: Application
  private database = new Database()
  private router = new Router()

  constructor() {
    this.express = express()

    this.database.connect()
    this.routes()
    this.middlewares()
  }

  private middlewares() {
    this.express.use(express.json())

    if (process.env.NODE_ENV === 'dev') this.express.use(morgan('dev'))
  }

  private routes() {
    this.router.initialize(this.express)
  }
}

export default new App().express
