import React, { Component } from 'react'

class CountHoc2 extends Component {
  
  render() {
    const {count,increment}=this.props 
    return (
      <div>
        <button onClick={increment}>click {count}</button>
      </div>
    )
  }
}

export default CountHoc2