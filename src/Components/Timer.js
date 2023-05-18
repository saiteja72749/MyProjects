import React, { useEffect, useState, useRef } from 'react'
let timerVar=null
function Timer() {
    const [count,setCount]=useState(0)
    const timerRef=useRef()
    function tick() {
    setCount(prevCount => prevCount + 1)
  }

    const startTimer=()=>{
            timerRef.current=setInterval(tick,1000)
    }
    const stopTimer=()=>{
            clearInterval(timerRef.current)
    }
    const reset=()=>{
            clearInterval(timerRef.current)
            setCount(0)
    }
  return (
        <center>
    <div><b>{count}</b><br/>
        <button onClick={()=>startTimer()}>start</button>
        <button onClick={()=>stopTimer()}>stop</button>
        <button onClick={()=>reset()}>reset</button>
    </div>
    </center>
  )
}

export default Timer