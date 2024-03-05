const importEvents = require('node:events')

class EventsModuleExample extends importEvents{
  constructor(){
    super();
    this.ordernumber=0;
  }
  // order(){
  //   for(let i = 0; i<=5; i++){
  //     this.ordernumber++;
  //   }
  // }
  order(size, shape){
    this.ordernumber++;
    this.emit('order', size, shape)
  }

  orderNumberDisplay(){
    console.log(`order number is ${this.ordernumber}`);
  }
}

module.exports = EventsModuleExample;