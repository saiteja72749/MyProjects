import React, { Component } from 'react'
export class ForwardingRefs extends Component {
    constructor(props) {
      super(props)
    this.inputRef=React.createRef()
    }
    clickHandler=()=>{
        this.inputRef.current.focus()
        // aalert(this.inputRef.current.value)
        console.log(this.inputRef.current.value)
    }
  render() {
    return (
      <div>
        <input type='text' ref={this.inputRef}/>
        <button onClick={this.clickHandler}>click</button>
      </div>
    )
  }
}
const ForwardingRefss=React.forwardRef((props,ref)=>{
    return (
      <div>
      <ForwardingRefs ref={ref}/>
      </div>
    )
    
  })
export default ForwardingRefss