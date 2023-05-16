import React, { Component } from 'react'

class ClassClick extends Component {
  render() {
    function clickHandler(){
        console.log("button clicked")
    }
    return (
      <div>
        <button onClick={clickHandler}>clickMe</button>
      </div>
    )
  }
}

export default ClassClick