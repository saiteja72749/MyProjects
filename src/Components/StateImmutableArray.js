import React, { useState } from 'react'

const initState=['sai','teja']
export const StateImmutableArray = () => {
    const [persons,setPersons]=useState(initState)
    const handleClick=()=>{
        const newPersons=[...persons]
        newPersons.push('ms')
        newPersons.push('d')
        setPersons(newPersons)
    }
    console.log('State Immutable render')
  return (
    <div>
    <button onClick={handleClick}>click</button>
    {persons.map((person)=>(
        <div key={person}>{person}</div>
    ))}
    </div>
  )
}
