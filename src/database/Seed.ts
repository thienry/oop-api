import fs from 'fs'
import Database from './Database'
import IUser from '../commons/interfaces/user'
import { User } from '../api/modules/users/user.model'

require('dotenv').config()

class Seed extends Database {
  private users!: IUser[]

  constructor() {
    super()
    this.connect().then(() => this.initialize())
  }

  private initialize() {
    try {
      this.getFilesData()
      
      switch (process.argv[2]) {
        case '--include':
          this.importData()
          return
      
        case '--delete':
          this.deleteData()
          return
      }
    } catch (error) {
      console.error(error)
    }
  }

  private getFilesData() {
    // this.bootcamps = JSON.parse(fs.readFileSync(`${__dirname}/_data/bootcamps.json`, 'utf-8'))
    // this.courses = JSON.parse(fs.readFileSync(`${__dirname}/_data/courses.json`, 'utf-8'))
    // this.reviews = JSON.parse(fs.readFileSync(`${__dirname}/_data/reviews.json`, 'utf-8'))
    this.users = JSON.parse(fs.readFileSync(`${__dirname}/_data/users.json`, 'utf-8'))
  }

  private async importData() {
    try {
      // Get App Models
      await User.create(this.users)

      console.log('Data Imported...');
      process.exit();
    } catch (error) {
      console.error(error)
    }
  }

  private async deleteData() {
    try {
      // Get App Models
      await User.deleteMany({})
     
      console.log('Data Destroyed...');
      process.exit();
    } catch (err) {
      console.error(err);
    }
  }
}

export default new Seed()
