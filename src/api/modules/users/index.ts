import BaseRouter from "../../../commons/router/base.router";
import UserController from './user.controller'

class UserRouter extends BaseRouter {
  controller = UserController

  initialize() {
    this.get('/list', this.controller.getUser)
  }
}

export default new UserRouter().getRouter()
