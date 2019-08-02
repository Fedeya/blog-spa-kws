import React, { Component } from "react";
import ReactLoading from "react-loading";
import axios from "axios";
import MostPopular from "../components/MostPopular";
import helpers from "../helpers";


class Post extends Component{

  state = {
    title: "",
    content: "",
    createdAt: "",
    likes: 0,
    comments: 0,
    isReady: false
  }

  getPost = async () => {
    const post = await axios.get("http://localhost:4000/posts/getOne/"+this.props.match.params.id);
    
    const { title, content, createdAt, likes, comments } = post.data;
    
    this.setState({
      title,
      content,
      createdAt,
      likes,
      comments,
      isReady: true
    })
  }

  componentDidMount(){
    this.getPost();
  }

  render(){

    let { title, content, createdAt, likes, comments, isReady } = this.state;

    createdAt = helpers.transformDate(createdAt);

    return (
      <div className="row mt-3">
        <div className="col-md-8">
          {
            isReady ? (
              <div className="card">
                <div className="card-body">
                  <h3>{title}</h3>
                  <p>{content}</p>
                </div>
                <div className="card-footer d-flex justify-content-between">
                  <span>{createdAt}</span>
                  <button className="btn btn-primary">Like!</button>
                </div>
              </div>
            ) : <ReactLoading type="bars" className="mx-auto" color="#000" /> 
          }
        </div>
        <div className="col-md-4">
          <MostPopular />
        </div>
      </div>
    )
  }
}

export default Post;