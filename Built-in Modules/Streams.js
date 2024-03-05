const Streams = require('node:fs')

// const zlib = require('node:zlib')
// const gzip = zlib.createGzip();

const readableStream = Streams.createReadStream("./Built-in Modules/FsModExTextFile1.txt",{
  encoding:'utf-8',
  highWaterMark:5
})

// readableStream.pipe(gzip).pipe(Streams.WriteStream("./Built-in Modules/FsModExTextFile2.txt.gz"))

const writableStream = Streams.createWriteStream("./Built-in Modules/FsModExTextFile2.txt")
readableStream.pipe(writableStream)

// readableStream.on("data",(chunk)=>{
//   console.log(chunk);
//   writableStream.write(chunk)
// })