import React, { Component } from 'react'

class CountMini extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    increment(){
        this.setState({
            count: this.state.count+1
        },()=>{console.log("callback value",this.state.count)})
        console.log(this.state.count)
    }
  render() {
    return (
      <div>
        <center>
         <p>not interested to create account on HARGLIM? that's okay guys. You can do some tym ps here by clicking on the button shown below</p>
        {this.state.count}
        <button onClick={()=>{this.increment()}}>click</button>
        </center>
      </div>
    )
  }
}

export default CountMini