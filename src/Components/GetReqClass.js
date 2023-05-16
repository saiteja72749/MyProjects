import React, { Component } from 'react'
import axios from 'axios'

class GetReqClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[],
         errMsg:''
      }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res=>{
            console.log(res)
            this.setState({posts:res.data})
        })
        .catch(err=>{
            console.log(err)
            this.setState({errMsg:'cannot retrieve data'})
        })
    }
  render() {
    const {posts,errMsg}=this.state
    return (
      <div>
        <h1>post titles are shown below</h1>
        {
            posts.length ?
            posts.map(post=><div key={posts.id}>{posts.title}</div>):
            null
        }
        {errMsg? <div>{errMsg}</div>:null}
      </div>
    )
  }
}

export default GetReqClass