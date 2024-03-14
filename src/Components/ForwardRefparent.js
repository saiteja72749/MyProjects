import React, { Component } from 'react'
import ForwardRefChild from './ForwardRefChild'
class ForwardRefparent extends Component {
    constructor(props) {
      super(props)
    this.inputRef=React.createRef()
    }
    clickHandler=()=>{
    this.inputRef.current.focus()
    console.log(this.inputRef.current.value)
    }


  render() {
    return (
      <div>
        <ForwardRefChild ref={this.inputRef}/>
        <button onClick={this.clickHandler}>click</button>
      </div>
    )
  }
}

export default ForwardRefparent