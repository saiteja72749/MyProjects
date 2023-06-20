import React, { useState } from 'react'
import useCounter from '../Hooks/useCounter'
function CountUseHook1() {
    const [count,increment,decrement,reset]=useCounter(0,1)
  return (
    <div>
        {count}
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
    </div>
  )
}

export default CountUseHook1