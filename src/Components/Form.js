import React, { Component } from 'react'
import SignUp from './SignUp'
class Form extends Component {
  
    constructor(props) {
      super(props)
    
      this.state = {
         username:"",
         password:"",
         confirmpassword:""

      }
    }
   
    handleUsernameChange=(event)=>{
        this.setState({
            username: event.target.value
        })
    }
    handlePasswordChange=(event)=>{
        this.setState({
            password: event.target.value
        })
    }
    // handleTopicChange=(event)=>{
    //     this.setState({
    //        topic: event.target.value 
    //     })
    // }
    handleConfirmPasswordChange=(event)=>{
      this.setState({
        ConfirmPassword: event.target.value
      })
    }
    // componentDidUpdate=()=>{
    //   console.log("updated")
    // }
    handleSubmit=(event)=>{
      if(this.state.username.length<=5){
        alert(`please enter a valid username of greater than 5 characters`)
        console.log("re-correct userName")
      }
      else if(this.state.password!==this.state.ConfirmPassword){
        alert("check your password")
        console.log("check your password")
      }
      else{
        alert(`LOGIN SUCCESSFUL ${this.state.username} ${this.state.password} ${this.state.confirmpassword}`)
        console.log("login successful")
      }
        // alert(`development is in pending`)
        // ${this.state.topic}
        event.preventDefault()
    }
  render() {
    return (
      <center>
        <h1>HARGLIM</h1>
        <form onSubmit={this.handleSubmit}>
          <h4>enter your login credentials to move further</h4>
      <div>
        <label>UserName: </label>
        <input type='text' 
        
        value={this.state.username} 
        onChange={this.handleUsernameChange}/>
       </div>
       <div>
        <label>Password: </label>
        <input type='Password' value={this.state.password} 
            onChange={this.handlePasswordChange}/>
       </div>
       <div>
        <label>Confirm Password: </label>
        <input type="password" value={this.state.newpassword} 
        onChange={this.handleConfirmPasswordChange}/>
       </div>
       {/* <div>
        <label>Topic</label>
        <select value={this.state.topic}
        onChange={this.handleTopicChange}>
            <option value="cricket">Cricket</option>
            <option value="BasketBall">BasketBall</option>
            <option value="Badminton">Badminton</option>
        </select>
       </div> */}
       
        <button type='submit'>Login</button>
        <div>not having an account?</div>
        <button type='submit' onClick={<SignUp/>}>Signup</button>
      </form>
      </center>
    )
  }
}

export default Form