import React, { Component } from 'react'
import HocCounter from './HocCounter'
class CountHoc extends Component {

  render() {
    const {name,count,increment}=this.props
    return (
      <div>
        <button onClick={increment}>{this.props.name} click {count}</button>
      </div>
    )
  }
}

export default React.memo(HocCounter(CountHoc,10))