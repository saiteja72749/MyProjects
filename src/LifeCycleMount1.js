import React, { Component } from 'react'

class LifeCycleMount1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"Sai Teja"
      }
      console.log("LifeCycleMount1 Constructor")
    }
    static getDerivedStateFromProps(props,state){
        console.log("LifeCycleMount1 getDerivedStateFromProps")
        return null
    }
    componentDidMount(){
        console.log("LifeCycleMount1 componentDidmount")
    }

  render() {
        console.log("LifeCycleMount1 Render")
        return <div>LifeCycleMount1</div>
  }
}

export default LifeCycleMount1