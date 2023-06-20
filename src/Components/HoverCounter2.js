import React, { Component } from 'react'

class CountHoc2 extends Component {
    
  render() {
    const {count,increment}=this.props
    return (
      <div>
        <h1 onMouseOver={increment}>Incrementing {count}</h1>
      </div>
    )
  }
}

export default CountHoc2