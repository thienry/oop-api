import * as http from 'http'
import App from './server/app'

require('dotenv').config()

const { PORT } = process.env || 5000

const server = http.createServer(App)

server.listen(PORT)
server.on('listening', () => console.log(`API has been started on port ${PORT}`))
server.on('error', (error: NodeJS.ErrnoException) => console.log(error.message))
