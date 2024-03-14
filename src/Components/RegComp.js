import React, { Component } from 'react'

export default class RegComp extends Component {
  render() {
    console.log("regcomp render")
    return (
      <div>
        regular component {this.props.name}
      </div>
    )
  }
}
