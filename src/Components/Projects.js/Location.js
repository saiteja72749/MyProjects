import React, { useEffect, useState } from 'react'

function Location() {
  const [latitude,setLatitude]=useState(null)
  const [longitude,setLongitude]=useState(null)
  const [error,setError]=useState(null)

  useEffect(()=>{
    const getLocation = () => {
      if(navigator.geolocation)
      {
        navigator.geolocation.getCurrentPosition(
          position =>{
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
          },
          error=>{
            setError(error)
          }
        )
      }
    }
    getLocation();
  },[])

  return (
    <div>
      <center>
              latitude - {latitude}<br/>
              longitude - {longitude}
      </center>
    </div>
  )
}

export default Location