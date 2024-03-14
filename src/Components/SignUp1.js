import React,{useEffect, useRef, useState} from 'react'
import { Navigate } from 'react-router-dom'

function SignUp1() {
    const [userName,setUserName]=useState('')
    const [phoneNumber,setPhoneNumber]=useState('')
    const [mailId,setmailId]=useState('')
    const [password,setPassword]=useState('')
    const [input,setInput]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')
    const [input1,setInput1]=useState('')
    const [typeOfAccount,setTypeOfAccount]=useState('')
    const [auth,setAuth]=useState(false)
    const inputRef=useRef(null)
    const HandleEvent=event=>{
        if(userName.length<5){
            alert(`please enter a valid username of greater than 5 characters`)
            console.log("re-correct userName")
          }
          else if(password!==confirmPassword){
            alert("check your password")
            console.log("check your password")
          }
          else{
          setAuth(true)
    }
    event.preventDefault();
}
    if(auth){
        return <Navigate to='/Login'/>
    }
    const showHide=()=>{
        input==='password'?
            setInput('text'):
            setInput('password')
    }
    const hideShow=()=>{
        input1==='password'?
            setInput1('text'):
            setInput1('password')
    }

    
    // useEffect(()=>{
    //     inputRef.current.focus()
    // },[])

  return (
    <div>
         <form onSubmit={HandleEvent}>
            <center>
                <div>
                    <h1><i>WELCOME TO HARGLIM</i></h1>
                    <label>UserName:</label>
                    <input ref={inputRef} type='text' 
                    value={userName} 
                    onChange={e=>setUserName(e.target.value)}/><br/>
                    <label>Phone Nuumber:</label>
                    <input type='number' 
                    value={phoneNumber} 
                    onChange={e=>setPhoneNumber(e.target.value)}/><br/>
                    <label>Mail Id:</label>
                    <input type='email' 
                    value={mailId} 
                    onChange={e=>setmailId(e.target.value)}/><br/>
                    <label>Password:</label>
                    <input type={input} 
                    value={password} 
                    onChange={e=>setPassword(e.target.value)}/>
                    <button onClick={showHide} type='button'>
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
                    <label>Type Of Account:</label>
                    <select
                    value={typeOfAccount}
                    onChange={e=>setTypeOfAccount(e.target.value)}>
                    <option value='useraccount'>useraccount</option> 
                    <option value="professionalaccount">professionalaccount</option>
                    </select><br/>
                    <button type='submit'>Create Account</button><br/>
                </div>
            </center>
        </form>
    </div>
  )
}

export default SignUp1