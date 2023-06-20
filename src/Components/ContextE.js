import React, { Component } from 'react'
import ContextF from './ContextF'
import UserContext from './UserContext'

class ContextE extends Component {
    // static contextType=UserContext
  render() {
    // const {name}=this.props
    return (
        <div>
         Context E {this.context} 
        <ContextF/>
        </div>
    )
  }
}
ContextE.contextType = UserContext

export default ContextE