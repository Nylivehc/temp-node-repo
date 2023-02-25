const EventEmitter = require('events');

const customEmitter = new EventEmitter()

customEmitter.on('response', () => {
  console.log(`Data recieved.`)
})

customEmitter.on('response', () => {
  console.log(`Some other logic here..`)
})

customEmitter.emit('response')