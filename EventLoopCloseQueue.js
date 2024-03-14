// const strm = require('node:fs')
// const readable = strm.createReadStream('./Built-in Modules/FsModExTextFile.txt')
// const writable = strm.createWriteStream('./EventLoopCloseQueueText.txt')
// readable.pipe(writable).

const strm = require('node:fs');
const readable = strm.createReadStream(__filename)
readable.close()

readable.on('close',()=>{
  console.log("readable stream");
})
setImmediate(()=>console.log("immediate"))
setTimeout(()=>console.log('timeout'))
process.nextTick(()=>console.log("nextTick"))
Promise.resolve().then(()=>console.log('promise'))