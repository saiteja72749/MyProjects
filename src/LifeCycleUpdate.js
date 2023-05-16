import React, { Component } from 'react'
import LifeCycleUpdate1 from './LifeCycleUpdate1'
class LifeCycleUpdate extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "Sai Teja"
      }
      console.log("LifeCycleUpdate constructor")
    }
    static getDerivedStateFromProps(props,state){
        console.log("LifeCycleUpdate getDerivedStateFromProps")
        return null
    }
    shouldComponentUpdate(){
        console.log("LifeCycleUpdate ShouldComponentUpdate") 
        return true
    }
    getSnapshotBeforeUpdate(prevprops, prevstate){
        console.log("LifeCycleUpdate getSnapShotsBeforeUpdate")
        return null
    }
    componentDidUpdate(){
        console.log("LifeCycleUpdate componentDidUpdate")
    }
    changeState=()=>{
        this.setState({
            message: "Sai Teja 1"
        })
    }
  render() {
    console.log("LifeCycleUpdate render")
    return (<div>
      <div>LifeCycleUpdate</div>
      <LifeCycleUpdate1/>
      <button onClick={this.changeState}>click</button>
      </div>
    )
  }
}

export default LifeCycleUpdate