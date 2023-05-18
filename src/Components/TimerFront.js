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
        </center>
    </div>
  )
}

export default TimerFront