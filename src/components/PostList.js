import React, { Component } from "react";
import axios from "axios";
import PostView from "./PostView";

class PostList extends Component{

  state = {
    posts: [],
    isReady: false
  }

  getPosts = async () => {
    const posts = await axios.get("http://localhost:4000/posts");
    console.log(posts);
    this.setState({posts: posts.data, isReady: true});
  }

  componentDidMount(){
    this.getPosts();
  }

  render(){
    if(!this.state.isReady){
      return (<h3>Cargando...</h3>)
    }

    return (
      <div>
        {
          this.state.posts.map(({id, title, content, author, createdAt}, index) => (
            <PostView key={index} id={id} title={title} content={content} author={author} created={createdAt} />
          ))
        }
      </div>
    )
  }
}

export default PostList;