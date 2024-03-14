import React, { Component } from 'react'

export class LifeCycleUpdate1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "Sai Teja"
      }
      console.log("LifeCycleUpdate1 constructor")
    }
    static getDerivedStateFromProps(props,state){
        console.log("LifeCycleUpdate1 getDerivedStateFromProps")
        return null
    }
    shouldComponentUpdate(){
        console.log("LifeCycleUpdate1 ShouldComponentUpdate") 
        return true
    }
    getSnapshotBeforeUpdate(prevprops, prevstate){
        console.log("LifeCycleUpdate1 getSnapShotsBeforeUpdate")
        return null
    }
    componentDidUpdate(){
        console.log("LifeCycleUpdate1 componentDidUpdate")
    }
  render() {
    console.log("LifeCycleUpdate1 render")
    return (
      <div>LifeCycleUpdate1</div>
    )
  }
}

export default LifeCycleUpdate1