import React, { useEffect, useState } from 'react'
import axios from 'axios'

function DataFetchingAlbums() {
    const [album,setAlbum]=useState({})
    const [id,setId]=useState(1)
    const [buttonId,setButtonId]=useState(1)

    const setHandler=()=>{
        setButtonId(id)
    }
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/albums/${buttonId}`)
        .then(res=>{
            console.log(res)
            setAlbum(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[buttonId])
  return (
    <div>
        <input type='text' 
        onChange={e=>setId(e.target.value)}/>
        <button type='button' 
        onClick={setHandler}>click to fetch</button>
        <div>{album.title}</div>
    </div>
  )
}

export default DataFetchingAlbums