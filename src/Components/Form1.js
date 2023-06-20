import React, { useEffect, useRef, useState } from 'react'
import { useNavigate,Navigate } from 'react-router-dom'

function Form1() {
    const [userName,setUserName]=useState('')
    const [password,setPassword]=useState('')
    const [input,setInput]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')
    const [input1,setInput1]=useState('password')
    const [auth,setAuth]=useState(false)
    // const navigate=useNavigate()
    const inputRef=useRef(null)
    const HandleEvent=event=>{
          if(password!==confirmPassword){
            alert("check your password")
            console.log("check your password")
          }
          else{
            alert(`LOGIN SUCCESSFUL ${userName}`)
            console.log("login successful")
          }
          event.preventDefault();
    }
    if(auth){
      return <Navigate to='/SignUp1'/>
    }
    const showHide=()=>{
      if(input==='password'){
        setInput('text')
      }
      else{
        setInput('password')
      }
    }

    const hideShow=()=>{
      if(input1==='password'){
        setInput1('text')
      }
      else{
        setInput1('password')
      }
    }
    // useEffect(()=>{
    //   inputRef.current.focus()
    // })

  return (
    <div>
       <center>
        <form onSubmit={HandleEvent}>
                <div>
                    <h1><i>WELCOME TO HARGLIM</i></h1>
                    <label>UserName:</label>
                    <input ref={inputRef} type='text' 
                    value={userName} 
                    onChange={e=>setUserName(e.target.value)}/><br/>
                    <label>Password:</label>
                    <input type={input} 
                    value={password} 
                    onChange={e=>setPassword(e.target.value)}/>
                    <button type='button' onClick={showHide}>
                      {
                      input==='password'?
                      'show':'hide'
                      } 
                    </button>
                    <br/>
                    <label>Confirm Password:</label>
                    <input type={input1} 
                    value={confirmPassword} 
                    onChange={e=>setConfirmPassword(e.target.value)}/>
                    <button type='button' onClick={hideShow}>
                      {
                        input1==='password'?
                        'show':'hide'
                      }
                    </button>
                    <br/>
                    <button type='submit'>Login</button><br/>
                </div>
        </form>
        Don't have an account?<br/>
                    <button type='submit' onClick={()=>setAuth(true)}>SignUp</button>
        </center>

    </div>
  )
}

export default Form1