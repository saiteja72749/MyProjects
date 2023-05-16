import React from 'react'

function FunctionCLick() {
    function clickHandler(){
        console.log("button clicked")
    }
  return (
    <div>
        <button onClick={clickHandler}>click</button>
    </div>
  )
}

export default FunctionCLick