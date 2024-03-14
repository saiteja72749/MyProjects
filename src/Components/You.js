import React from 'react'

function You(props) {
  return (
    <div>
        <button onClick={()=>props.parentHandler("HULALA HULALA")}>click me</button>
    </div>  
  )
}

export default You