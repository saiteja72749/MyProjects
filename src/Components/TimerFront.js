import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
function TimerFront() {
    const [auth,setAuth]=useState('')
    if(auth){
        return <Navigate to='/timer'/>
    }
  return (
    <div>
        <center>
        {/* <Link to='/timer'><li>Timer</li></Link> */}
        <b><u>Stop Watch</u></b><br/>
        <button type='submit' onClick={()=>{setAuth(true)}}>Click for stop watch</button>
        <p className='mahi'>
          <u><b>Note:</b></u><br/>
          1. Sky Blue color background on the buttons indicates that they're in active state.<br/>
          2. While color background on the buttons indicates that they're disabled. 
        </p>
        </center>
    </div>
  )
}

export default TimerFront