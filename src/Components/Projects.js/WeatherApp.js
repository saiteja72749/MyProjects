import React, { useState } from 'react'
import './Projects.css'

function WeatherApp() {
  const [city,setCity]=useState('')
  const [result,setResult]=useState('')

  const submitHandler = e => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`)
    .then(
      response => response.json()
    ).then(data => {
      const kelvin = data.main.temp
      const celsius = kelvin - 273.15
      setResult(`Temperature at ${city} is ${Math.round(celsius)} Degrees`)   
      setCity('') 
    }).catch(
      error=>{
        console.log('not found')
      }
    )
    e.preventDefault()
  }
  return (
    <div>    
      <center>
         <form onSubmit={submitHandler} className='weather'>
          <h2 className='text'>WeatherApp</h2>
            <input type='text' name='city' value={city} onChange={e=>setCity(e.target.value)}/><br/>
            <b>{result}</b><br/>
            <button type='submit'>submit</button>
         </form>
         
      </center>
    </div>
  )
}

export default WeatherApp