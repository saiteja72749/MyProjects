// require('./ModScope')
// require('./ModScope1')


// (function (message){
//   const superhero = 'batman'
//   console.log(message,superhero)
// })('hello');

// (function (text){
//   const superhero='superman'
//   console.log(text,superhero)
// })('hey');


// const modCache = require('./ModCaching')
// console.log(modCache.getName())
// modCache.setName('teja');
// console.log(modCache.getName())

// const modCache1 = require('./ModCaching')
// console.log(modCache1.getName());

// const name1 = require('./ModCaching')
// const firName = new name1('sai')
// console.log(firName.getName())
// firName.setName('teja')
// console.log(firName.getName());

// const name2 = new name1("mahi")
// console.log(name2.getName())

// const impexppatterns = require('./impexppatterns')
// const {add,sub} = impexppatterns
// console.log(add(2,5))
// console.log(sub(2,5))

const data = require("./ImportJson.json")
console.log(data.address.city)