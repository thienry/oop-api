import { Request, Response, NextFunction } from 'express'
import { Document } from 'mongoose'
import HttpController from '../../../commons/controllers/http.controller'
import { User } from './user.model'

class UserController extends HttpController {
  private user = User

  list = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const users = await this.user.find()
      this.sendResponse(res, next, users)
    } catch (error) {
      this.sendResponse(res, next, {}, { status: 500, message: 'Error on list users' })
    }
  }

  read = async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.params.id

    try {
      const user = await this.user.findById(userId) as Document
      this.sendResponse(res, next, user)
    } catch (error) {
      this.sendResponse(res, next, {}, { status: 500, message: 'Error on read user by id' })
    }
  }

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const newUser = await this.user.create(req.body)
      this.sendResponse(res, next, newUser)  
    } catch (error) {
      this.sendResponse(res, next, {}, { status: 500, message: 'Error on create user' })
    }
  }

  update = async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.params.id
    const request = req.body

    try {
      const updatedUser = await this.user.findByIdAndUpdate(userId, request, { new: true }) as Document
      this.sendResponse(res, next, updatedUser)
    } catch (error) {
      this.sendResponse(res, next, {}, { status: 500, message: 'Error on update user' })
    }
  }

  delete = async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.params.id

    try {
      const isDeleted = await this.user.findByIdAndDelete(userId) as Document
      this.sendResponse(res, next, isDeleted)
    } catch (error) {
      this.sendResponse(res, next, {}, { status: 500, message: 'Error on delete user' })
    }
  }
}

export default new UserController()
