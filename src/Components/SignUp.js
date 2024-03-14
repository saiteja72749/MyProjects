import React, { Component } from 'react'

class SignUp extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
           userName:"",
           phoneNumber:"",
           mailId:"",
           setPassword:"",
           confirmPassword:"",
           typeOfAccount:"",
          
        }
      //  this.inputRef=React.createRef()
      }
      handleUserNameChange=(event)=>{
          this.setState({
              userName:event.target.value
          })
      }
      handlePhoneNumberChange=(event)=>{
          this.setState({
              phoneNumber:event.target.value
          })
      }
      handleMailIdChange=(event)=>{
          this.setState({
              mailId:event.target.value
          })
      }
      handleSetPasswordChange=(event)=>{
          this.setState({
              setPassword:event.target.value
          })
      }
      handleConfirmPasswordChange=(event)=>{
          this.setState({
              confirmPassword:event.target.value
          })
      }
      handleTypeOfAccountChange=(event)=>{
          this.setState({
              typeOfAccount:event.target.value
          })
      }
      handleSubmit=(event)=>{
        if(this.state.userName.length<=5)
        {
          alert("username must be greater than 5 characters")
          console.log("re-correct userName")
        }
        else if(this.state.setPassword!==this.state.confirmPassword)
        {
          alert("passwords not matching...")
          console.log("re-correct passwords")
        }
        else{
          alert(`
          ${this.state.userName}
          ${this.state.phoneNumber} 
          ${this.state.mailId} 
          // ${this.state.setPassword} 
          // ${this.state.confirmPassword} 
          ${this.state.typeOfAccount}
          account verified
          `)
          console.log("account verified")
        }
        // componentDidMount(){
        //   this.inputRef.current.focus()
        //   console.log(this.inputRef)
        // } 
        // else if(this.state.setPassword===this.state.confirmPassword){
        //   alert(`
        //   ${this.state.userName}
        //   ${this.state.phoneNumber} 
        //   ${this.state.mailId} 
        //   ${this.state.setPassword} 
        //   ${this.state.confirmPassword} 
        //   ${this.state.typeOfAccount}
        //   account verified
        //   `)
      // }
        //     else{
        //         alert(`check your password`)
        //         console.log("check your password")
        //     }
        
        event.preventDefault()
      }
  render() {
    return (
        <center>
          <h1>signup to create an account on HARGLIM</h1>
            <form onSubmit={this.handleSubmit}>
      <div>
        <label>username: </label>
        <input type='text'
        value={this.state.userName} 
        onChange={this.handleUserNameChange}/>
      </div>
      <div>
        <label>phonenumber: </label>
        <input type='text' 
        value={this.state.phoneNumber} 
        onChange={this.handlePhoneNumberChange}/>
      </div>
      <div>
        <label>mailid: </label>
        <input type='email' 
        value={this.state.mailId} 
        onChange={this.handleMailIdChange}/>
      </div>
      <div>
        <label>setnewpassword: </label>
        <input type='password'
         value={this.state.setPassword} 
         onChange={this.handleSetPasswordChange}/>
      </div>
      <div>
        <label>confirmnewpassword: </label>
        <input type='password' 
        value={this.state.confirmPassword} 
        onChange={this.handleConfirmPasswordChange}/>
      </div>
      <div>
        <label>typeofaccount: </label>
        <select
            value={this.state.typeOfAccount}
            onChange={this.handleTypeOfAccountChange}>
           <option value='useraccount'>useraccount</option> 
           <option value="professionalaccount">professionalaccount</option>
        </select>
      </div>
      <button type='submit'>create account</button>
      <p>NOTE: once you click on signup, one must enter the OTP received to the respected mobile number or mail id</p>
     </form>
      </center>
    )
  }
}

export default SignUp