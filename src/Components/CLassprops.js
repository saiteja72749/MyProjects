import React,{Component} from 'react'
class Bye extends Component{
    
    render(){
        const{name,myName}=this.props
        return(
            <div>
                <h1>
                sai{name}{myName}
                </h1>
            </div>
        )
    }
}
export default Bye