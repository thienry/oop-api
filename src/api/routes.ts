import fs from 'fs'
import path from 'path'
import { Application } from 'express'

export default class Router {
  initialize(app: Application) {
    const isDirectory = (source: string) => fs.lstatSync(source).isDirectory()
    
    const getDirectories = (source: string) => 
      fs.readdirSync(source).filter((name: string) => isDirectory(path.join(source, name)))
  
    getDirectories(path.join(__dirname, 'modules'))
      .forEach(route => app.use(`/api/${route.replace(/-/g, '')}`, require(`./modules/${route}`).default)) 
  }
}
