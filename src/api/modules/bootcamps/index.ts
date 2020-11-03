import BaseRouter from "../../../commons/router/base.router";
import BootcampController from './bootcamp.controller'

class BootcampRouter extends BaseRouter {
  controller = BootcampController

  initialize() {
    this.get('/list', this.controller.getBootcamps)
  }
}

export default new BootcampRouter().getRouter()
