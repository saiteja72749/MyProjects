import React, { useEffect, useRef, useState } from 'react'
import './Projects.css'

function MessagePro() {
    const [First,setFirst]=useState('')
    const [Second,setSecond]=useState('')
    const [Message,setMessage]=useState('')
    const [disable,setDisable]=useState(false)

    const MessageProRef=useRef(null)

    function submit (e) {
        alert(`Hi there! ${First} ${Second} want to meet you for ${Message}`)
        e.preventDefault()
    }
    // url=`https://api.whatsapp.com/send?phone=8520953164 &text=${Message}`;
    useEffect(()=>{
        MessageProRef.current.focus()
        },[])

    const handleCheckBoxChange = () => {
        setDisable(!disable)
    }

  return (
    <div>
        <form>
            <center>
                <div className='pro'>
                    <input 
                    type='text' 
                    placeholder='First Name' 
                    value={First} 
                    onChange={(e)=>setFirst(e.target.value)} 
                    ref={MessageProRef}/><br/>
                    <input 
                    type='text' 
                    placeholder='Last Name' 
                    value={Second} 
                    onChange={(e)=>setSecond(e.target.value)}/><br/>
                    {/* <label> */}
                    <input 
                    type='checkbox' 
                    checked={disable} 
                    onChange={handleCheckBoxChange} 
                    className='checkbox'/>
                    <b>Consulting for</b><br/>
                    {/* </label> */}
                    {disable && (
                        <div>
                            {/* <label> */}
                            <input 
                            type='text'
                            placeholder='Message' 
                            value={Message} 
                            onChange={(e)=>setMessage(e.target.value)}/>
                            {/* </label> */}
                        </div>
                    )}
                  <button><a style={{color: 'white'}} href={`https://api.whatsapp.com/send?phone=918520953164 &text= Hi there! ${First} ${Second} consulting you for ${Message}`}>Consult</a></button>
                </div>
            </center>
        </form>
    </div>
  )
}

export default MessagePro

