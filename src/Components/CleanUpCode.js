import React, { useState } from 'react'
import MouseListnerUseEffect from './MouseListnerUseEffect'

function CleanUpCode() {
    const [show,setShow]=useState(true)
  return (
    <div>
        <button onClick={()=>setShow(!show)}>CleanUpCode</button>
        {show && <MouseListnerUseEffect/>}
    </div>
  )
}

export default CleanUpCode