import React, { Component } from 'react'
import HocCounter from './HocCounter'
class HoverCounter extends Component {
    
  render() {
    const {name,count,increment}=this.props
    return (
      <div>
        <h1 onMouseOver={increment}>{this.props.name} Hovered {count}</h1>
      </div>
    )
  }
}

export default HocCounter(HoverCounter,3)