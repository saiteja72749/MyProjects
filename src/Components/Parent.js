import React, { Component } from 'react'
import Child from './Child' 
class Parent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName: "rey"
      }
      this.parentMethod=this.parentMethod.bind(this)
    }
    parentMethod(child){
        alert(`hi ${this.state.parentName} from ${child}`)
    }
   render() {
     return (
       <div>
        <Child greetHandler={this.parentMethod}/>
       </div>
     )
   }
 }
 
 export default Parent