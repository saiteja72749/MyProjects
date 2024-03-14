import React, { Component } from 'react'
import LifeCycleMount1 from './LifeCycleMount1'

class LifeCycleMount extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"Sai Teja"
      }
      console.log("LifeCycleMount Constructor")
    }
    static getDerivedStateFromProps(props,state){
        console.log("LifeCycleMount getDerivedStateFromProps")
        return null
    }
    componentDidMount(){
        console.log("LifeCycleMount componentDidmount")
    }

  render() {
        console.log("LifeCycleMount Render")
        return (
        <><div>LifeCycleMount</div><div><LifeCycleMount1 /></div></>
       )
  }
}

export default LifeCycleMount