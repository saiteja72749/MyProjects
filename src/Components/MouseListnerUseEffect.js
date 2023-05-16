import React, { useEffect, useState } from 'react'

function MouseListnerUseEffect() {
    const [x,setX]=useState(0)
    const [y,setY]=useState(0)
    const logMouseMoment=e=>{
        console.log('mouseevent')
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{
        console.log('useeffect called')
        window.addEventListener('mousemove',logMouseMoment)
        return()=>{
            console.log('unmounting')
            window.removeEventListener('mousemove',logMouseMoment)
        }
    },[])
  return (
    <div>
        X-{x} Y-{y}
    </div>
  )
}

export default MouseListnerUseEffect