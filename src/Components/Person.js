import React from 'react'

function Person({person}) {
  return (
    <div>
        <h2>
       I'm {person.name}, {person.age} years old from {person.college} with id {person.id}
        </h2>
    </div>
  )
}

export default Person