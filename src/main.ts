import * as http from 'http'
import dotenv from 'dotenv'
import colors from 'colors/safe'
import App from './server/app'

dotenv.config()

const { PORT } = process.env || 5000

export const server = http.createServer(App)

server.listen(PORT)
server.on('listening', () => 
  console.log(colors.yellow.bold(`API has been started... click => http://localhost:${PORT}/api/check/health`)))
server.on('error', (error: NodeJS.ErrnoException) => console.log(error.message))
