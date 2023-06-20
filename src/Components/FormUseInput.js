import React, { useState } from 'react'
import useInput from '../Hooks/useInput'
function FormUseInput() {

    const [firstName,bindFirstName,resetFirstName]=useInput('')
    const [lastName,bindLastName,resetLastName]=useInput('')

    const submitHandler=(e)=>{
        e.preventDefault()
        alert(`hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }

  return (
    <div>
        <form onSubmit={submitHandler}>
            <div>
                <label>First Name</label>
                <input {...bindFirstName} type='text' /><br/>
                <label>Last Name</label>
                <input {...bindLastName} type='text' /><br/>
                <button type='submit'>submit</button>
            </div>
        </form>
    </div>
  )
}

export default FormUseInput