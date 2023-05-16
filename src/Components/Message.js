import React, {Component} from 'react'
class Welcome extends Component{
    constructor(){
        super()
        this.state={
            message: 'Welcome'
        }
    }
    changeMessage(){
        this.setState({
            message: 'thankyou for visiting'
        })
    }
render(){
    return(
        <div>   
        <h1>{this.state.message}</h1>
        <button onClick={()=>this.changeMessage()}>subscribe</button>
        </div>
    )
}
}
export default Welcome