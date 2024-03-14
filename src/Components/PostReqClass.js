import React, { Component } from 'react'
import axios from 'axios'

export class PostReqClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userId:'',
         title:'',
         body:''
      }
    }

    handlePosts=e=>{
        this.setState({[e.target.name]:e.target.value})
    
    }
    submitHandler=e=>{
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(res=>{
            console.log(res)
            this.setState({posts:res.data})
        })
        .catch(err=>{
            console.log(err)
        })
    }

  render() {
    const {userId,title,body}=this.state
    return (
        <div>
        <form onSubmit={this.submitHandler}>
        <div>
        <input type='text' 
        name='userId'
        placeholder='userId' 
        value={userId} 
        onChange={this.handlePosts}/><br/>
        </div>
        <div>
        <input type='text' 
        name='title'
        placeholder='title' 
        value={title} 
        onChange={this.handlePosts}/><br/>
        </div>
        <div>
        <input type='text' 
        name='body'
        placeholder='body' 
        value={body} 
        onChange={this.handlePosts}/><br/>
        </div>
        <div>
        <button type='submit'>Submit</button>
        </div>
    </form> 
    </div> 
    )
  }
}

export default PostReqClass