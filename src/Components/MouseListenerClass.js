import React, { Component } from 'react'

export class MouseListenerClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         x:0,
         y:0
      }
    }
    logMouse=e=>{
        this.setState({x:e.clientX, y:e.clientY})
    }
    componentDidMount(){
        window.addEventListener('mousemove',this.logMouse)
    }
    componentDidUpdate(){
      console.log('mousemove updated')
      window.addEventListener('mousemove',this.logMouse)
    }
    componentWillUnmount(){
      window.removeEventListener('mousemove',this.logMouse)
    }
  render() {
    return (
      <div>
        X-{this.state.x} Y-{this.state.y}
      </div>
    )
  }
}

export default MouseListenerClass