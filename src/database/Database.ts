import dotenv from 'dotenv'
import mongoose from 'mongoose'
import colors from 'colors/safe'

export default class Database {
  protected dotenv = dotenv

  constructor() {
    this.dotenv.config()
  }

  async connect(): Promise<void> {
    try {
      const conn = await mongoose.connect(process.env.MONGO_URI as string, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
      })
  
      console.log(colors.green.bold(`MongoDB Connected: ${conn.connection.host}`))
    } catch (error) {
      throw Error(`MongoDB Could not connect: ${error.message}`)
    }
  }
}
