import React from 'react'

function ErrorBound({name}) {
    if (name==='mom'){
        throw new Error("not a hero")
    }
  return (
    <div>
        {name}
    </div>
  )
}

export default ErrorBound