import React, { useEffect, useRef, useState } from 'react'
import Timer from './Timer'

function TimerRef() {
    const [timer,setTimer]=useState(0)
    const intervalRef=useRef()
    useEffect(()=>{
        intervalRef.current=setInterval(()=>{
            setTimer(prevTimer=>prevTimer+1)
        },1000)
        return ()=>{
            clearInterval(intervalRef.current)
        }
    },[])
  return (
    <>
    <div>Timer- {timer}</div>
    <button onClick={()=>clearInterval(intervalRef.current)}>stop</button>
    </>
  )
}

export default TimerRef