import React, { Component } from 'react'

class Refs extends Component {
    constructor(props) {
      super(props)
      this.inputRef=React.createRef()
    }
    componentDidMount(){
        this.inputRef.current.focus()
        console.log(this.inputRef) 
    }
    clickHandler=()=>{
    alert(this.inputRef.current.value)
    console.log(this.inputRef.current.value)
    }
  render() {
    return (
      <center>
      <div>
        <input type="text" ref={this.inputRef}/>
        <button onClick={this.clickHandler}>click</button>
      </div>
      </center>
    )
  }
}

export default Refs