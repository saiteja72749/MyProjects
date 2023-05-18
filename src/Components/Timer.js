import React, { useEffect, useState, useRef } from 'react'
function Timer() {
    const [count,setCount]=useState(0)
    const [sta,setSta]=useState(false)
    const [pau,setPau]=useState(true)
    const [res,setRes]=useState(true)
    const [rest,setRest]=useState(true)
//     const [text,setText]=useState(false)
    const timerRef=useRef()
    function tick() {
    setCount(prevCount => prevCount + 1)
  }

    const start=()=>{
            setSta(true)
            setPau(false)       
            timerRef.current=setInterval(tick,100)
            console.log('timer started')
    }
    const pause=()=>{
            clearInterval(timerRef.current)
            setPau(true)
            setRes(false)
            setRest(false)
            console.log('timer paused')
    }
    const resume=()=>{
            timerRef.current=setInterval(tick,100)
            console.log('timer resumed')
            setRes(true)
            setRest(true)
            setPau(false)
    }
    const reset=()=>{
            clearInterval(timerRef.current)
            setCount(0)
            setRest(true)
            setRes(true)
            setSta(false)
            console.log('reset done')
    }
//     const font=()=>{
//         <div>Click start to start</div>
//         setText(true)
//     }

  return (
        <center>
        <div><b>{count}</b><br/>
        <button onClick={()=>start()} disabled={sta} >start</button>
        <button onClick={()=>pause()} disabled={pau}>pause</button>
        <button onClick={()=>resume()} disabled={res}>resume</button>
        <button onClick={()=>reset()} disabled={rest}>reset</button><br/>
        {/* <i>Click start to start</i> */}
    </div>
    </center>
  )
}

export default Timer