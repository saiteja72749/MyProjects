const fsmod = require('node:fs')


//reading data from the files
console.log("1");
const fileContents = fsmod.readFileSync('./Built-in Modules/FsModExTextFile.txt',"utf-8")   //synchronously
console.log(fileContents)

console.log("2");

fsmod.readFile('./Built-in Modules/FsModExTextFile.txt',"utf-8" ,(error,data)=>{     //asynchronously
  if(error){
    console.log(error);   
  }else{
    console.log(data);
  }
})

console.log("3");

//writing data into the files
fsmod.writeFileSync('./Built-in Modules/FsModExTextFile1.txt',"Hello man. How are you?");       //synchronously

fsmod.writeFile('./Built-in Modules/FsModExTextFile1.txt'," Hello man. How are you?",{flag:"a"} ,(err)=>{      //asynchronously
  if(err){
    console.log(err);
  }else{
    console.log("data written");
  }
})