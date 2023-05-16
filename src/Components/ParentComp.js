import React, { Component, PureComponent } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'
export class ParentComp extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "saiteja"
      }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:"saiteja"
            })
        },2000)
    }
  render() {
    console.log("parent comp render")
    return (
      <div>
        PARENT COMPONENT
        <MemoComp name={this.state.name}/>
      {/* <RegComp name={this.state.name}/> */}
      {/* <PureComp name={this.state.name}/> */}
        </div>
    )
  }
}

export default ParentComp