import React, { Component } from 'react'
import ConditionalRend from './ConditionalRend'
import You from './You'
class Me extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         myName: false
      }
      this.parentName=this.parentName.bind(this)
    }
    parentName(child){
        alert(`YOYOYO ${child}`)
        alert(`YOYOYO ${this.state.myName} from ${child}`)
    }
  render() {
    if(this.state.myName){
      return <div><You parentHandler={this.parentName}/></div>
    }
    else{
      return <ConditionalRend/>
    }
    return (
      // <div>
      <div>
        <You parentHandler={this.parentName}/>
        <ConditionalRend/>
      </div>
      // <ConditionalRend Rendering={this.renderName}/>
      // </div>

    )
  }
}

export default Me