import mongoose from 'mongoose'

require('dotenv').config()

export default class Database {
  async connect() {
    try {
      const conn = await mongoose.connect(process.env.MONGO_URI as string, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
      })
  
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      throw Error(`MongoDB Could not connect: ${error.message}`);
    }
  }
}
