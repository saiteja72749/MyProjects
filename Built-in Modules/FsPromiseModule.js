const FsPromiseMod = require('node:fs/promises');

FsPromiseMod.readFile('./Built-in Modules/FsModExTextFile2.txt','utf-8')
.then((data)=>console.log(data))
.catch((err)=>console.log(err))