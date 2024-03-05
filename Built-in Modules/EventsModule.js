const EventEmitter = require('node:events');
const emitter = new EventEmitter();

emitter.on("order_in_a_restraunt",(size,shape)=>{
  console.log(`I ordered a pizza at a restraunt of ${size} pizza and which is of ${shape} in shape.`)
})

emitter.on("order_in_a_restraunt",(small)=>{
  console.log(`Hello ${small}`)
})

emitter.emit("order_in_a_restraunt","large","round");