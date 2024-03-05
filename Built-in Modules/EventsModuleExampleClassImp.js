const EventModuleimp = require('./EventsModuleExampleClass')
const EventModuleimp2 = require('./EventsModuleExampleClassimp2')
const EventModuleimp3 = require('./EventsModuleExampleClassimp3');
const exClass = new EventModuleimp();
const exClass2 = new EventModuleimp2();
const exClass3 = new EventModuleimp3();

exClass.on('order',(size, shape)=>{
  console.log(`I ordered a pizza at a restraunt of ${size} size which is of ${shape} in shape.`)
  exClass2.drinkServe(size);
  exClass3.Alcohol(size);
})

// const arr = ['large','high content'] 
// arr.map(x=>exClass.order(x,'round'))

exClass.order('large','round');
exClass.order('high content','round')
exClass.orderNumberDisplay();