import React from 'react'

function MemoComp({name}) {
    console.log("memo component render")
  return (
    <div>
        memo component
        {name}
    </div>
  )
}

export default React.memo(MemoComp)