function greet(name){
  console.log(`Hello ${name}`);
}

function higherOrderFunction(callBack){
  const name = "Sai Teja";
  callBack(name);
}

higherOrderFunction(greet);