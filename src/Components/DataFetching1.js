import React, { useEffect, useState } from 'react'
import axios from 'axios'

function DataFetching1() {
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState('')
    const [posts,setPosts]=useState({})

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response=>{
            setLoading(false)
            setPosts(response.data)
            setError('')
            // console.log(response)
        })
        .catch(error=>{
            setLoading(false)
            setPosts({})
            setError('something went wrong')
        })
    },[])
  return (
    <div>{
        loading? 'Loading':posts.title
    }
    {error? error:null}
    </div>
  )
}

export default DataFetching1