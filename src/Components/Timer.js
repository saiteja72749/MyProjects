import React, { useEffect, useState } from 'react'
let timerVar=null
function Timer() {
    const [count,setCount]=useState(0)
    const tick=()=>{
        setCount(prevCount=>prevCount+1)
    }

    const startTimer=()=>{
            timerVar=setInterval(tick,1000)
    }
    const stopTimer=()=>{
            clearInterval(timerVar)
    }
    const reset=()=>{
            clearInterval(timerVar)
            setCount(0)
    }
  return (
        <center>
    <div><b>{count}</b><br/>
        <button onClick={()=>startTimer('start')}>start</button>
        <button onClick={()=>stopTimer('stop')}>stop</button>
        <button onClick={()=>reset('reset')}>reset</button>
    </div>
    </center>
  )
}

export default Timer