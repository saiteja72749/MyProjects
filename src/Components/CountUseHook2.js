import React, { useState } from 'react'
import useCounter from '../Hooks/useCounter'
function CountUseHook2() {
    const [count,increment,decrement,reset]=useCounter(10,10)
  return (
    <div>
        {count}
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
    </div>
  )
}

export default CountUseHook2