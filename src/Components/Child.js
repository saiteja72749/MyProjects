import React from 'react'

function Child(props) {
  return (
    <div>
        <button onClick={()=>props.greetHandler()}>click</button>
    </div>
  )
}

export default Child