class ModCache{
  constructor(name){
    this.name=name;
  }
  getName(){
    return this.name
  }
  setName(name){
    this.name=name
  }
}
// module.exports=new ModCache("sai")
module.exports = ModCache; //to create the instances separately, instead of exporting the instance, we can export the class itself