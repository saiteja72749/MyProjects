// console.log("hello");
// process.nextTick(()=>{console.log("hello 1")})
// console.log("hello 2");

// Promise.resolve().then(()=>{console.log("promise");})
// process.nextTick(()=>{console.log("next tick")})

// setTimeout(()=>{console.log("timeout 1");},1000)
// setTimeout(()=>{console.log("timeout 2");},500)
// setTimeout(()=>{console.log("timeout 3");},0)

// setTimeout(()=>{console.log("timeout 1");})
// setTimeout(()=>{console.log("timeout 2")
// process.nextTick(()=>{console.log("next tick inside settimeout")})
// })
// setTimeout(()=>{console.log("timeout 3");})

// process.nextTick(()=>{console.log("next tick 1")})
// process.nextTick(()=>{console.log("next tick 2")
// process.nextTick(()=>{console.log("next tick inside 2")})
// })
// process.nextTick(()=>{console.log("next tick 3")})

// Promise.resolve().then(()=>{console.log("promise 1")})
// Promise.resolve().then(()=>{console.log("promise 2")
// Promise.resolve().then(()=>{console.log("promise inside 2")})
// })
// Promise.resolve().then(()=>{console.log("promise 3")})

// const fsMod = require('node:fs')
// fsMod.readFile(__filename,()=>{
//   console.log("reading file");
// })
// process.nextTick(()=>{console.log("nextTick");})
// Promise.resolve().then(()=>{console.log("promise");})

// const fsmod = require("node:fs")

// fsmod.readFile(__filename,()=>{
//   console.log("I/o async method")
//   setImmediate(()=>console.log("setImmediate"))
//   process.nextTick(()=>console.log("nextTick inside I/O"))
//   Promise.resolve().then(()=>console.log("promise inside I/O"))
// })
// process.nextTick(()=>console.log("nextTick"))
// Promise.resolve().then(()=>console.log("promise"))
// setTimeout(()=>console.log("timeout"),0)
// setImmediate(()=>console.log("setImmediate"))

// setImmediate(()=>console.log("immediate 1"))
// setImmediate(()=>{
//   console.log("immediate 2")
//   process.nextTick(()=>console.log("next tick"))
//   Promise.resolve().then(()=>console.log("promise"))
// })
// setImmediate(()=>console.log("immediate 3"))

setTimeout(()=>console.log("timeout"),0)
setImmediate(()=>console.log("immediate"))

// for(let i=0;i<2000000;i++){s}