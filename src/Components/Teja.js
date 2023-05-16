import React from 'react'

function Teja({person}) {
  return (
    <div>
        <h2>{person.name},{person.id},{person.profession},{person.college}</h2>
    </div>
  )
}

export default Teja