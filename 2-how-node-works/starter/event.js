const EventEmitter = require('events')
const http = require('http')

class Sales extends EventEmitter {
  constructor() {
    super()
  }
}
const emitter = new Sales()

emitter.on('newSale', () => {
  console.log('New sale')
})

emitter.on('newSale', () => {
  console.log('customer name')
})

emitter.on('newSale', (stock) => {
  console.log('')
})

emitter.emit('newSale')

/////////////////////////////////////

const server = http.createServer()

server.on('request', (req, res) => {
  console.log('Request received')
  res.end('Request received')
})

server.on('request', (req, res) => {
  res.end('Another request')
})

server.on('close', () => {
  console.log('Server closed')
})

server.listen(8000, '127.0.0.1', () => {
  console.log('Server listening on port 8000')
})
