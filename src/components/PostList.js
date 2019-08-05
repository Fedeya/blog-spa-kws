import React, { Component } from "react";
import ReactLoading from "react-loading";
import axios from "axios";
import PostView from "./PostView";

class PostList extends Component{

  state = {
    posts: [],
    isReady: false
  }

  getPosts = async () => {
    const { page } = this.props;
    const posts = await axios.get("http://localhost:4000/posts/getAll?page="+page);
    this.setState({posts: posts.data, isReady: true});
  }

  componentDidMount(){
    this.getPosts();
  }

  render(){
    if(!this.state.isReady){
      return <ReactLoading color="#000" className="mx-auto" type="bars"/>
    }

    return (
      <div>
        {
          this.state.posts.map(({_id, title, content, author, createdAt}, index) => (
            <PostView key={index} id={_id} title={title} content={content} author={author} created={createdAt} />
          ))
        }
      </div>
    )
  }
}

export default PostList;