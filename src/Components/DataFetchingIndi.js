import React,{useState,useEffect} from 'react'
import axios from 'axios'

function DataFetchingIndi() {
    const [post,setPost] = useState({})
    const [id,setId] = useState(1)
    const [buttonClick,setButtonClick] = useState(1)
    
    const handleClick=()=>{
        setButtonClick(id)
    } 
    useEffect(() => {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${buttonClick}`)
            .then(res=>{
                console.log(res)
                setPost(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
    },[buttonClick])
  return (
    <div>
        <input 
        value={id} 
        onChange={e=>setId(e.target.value)}/>
        <button type='button' 
        onClick={handleClick}>click to fetch</button>
        <div>
            {post.title}
        </div>
    </div>
  )
}

export default DataFetchingIndi