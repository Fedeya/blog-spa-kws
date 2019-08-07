import React, { Component } from "react";
import ReactLoading from "react-loading";
import axios from "axios";
import helpers from "../helpers";
import ListComments from "../components/ListComments";

class Post extends Component{

  state = {
    title: "",
    content: "",
    createdAt: "",
    imageUrl: "",
    likes: 0,
    comments: 0,
    isReady: false
  }

  getPost = async () => {
    const post = await axios.get("http://localhost:4000/posts/getOne/"+this.props.match.params.id);
    
    const { title, content, createdAt, likes, comments, imageUrl } = post.data;
    
    this.setState({
      title,
      content,
      createdAt,
      likes,
      comments,
      imageUrl,
      isReady: true
    })
  }

  componentDidMount(){
    this.getPost();
  }

  render(){

    let { title, content, createdAt, likes, comments, isReady, imageUrl } = this.state;

    createdAt = helpers.transformDate(createdAt);

    if(!isReady){
      return (
        <ReactLoading type="bars" color="#000" className="mx-auto" />
      )
    }

    return (
      <div className="mt-3">
        <div className="d-flex justify-content-between">
          <span className="text-info">{createdAt}</span>
          <span className="list-group-item border-info p-2">Aderezos</span>
        </div>
        <h2>{title}</h2>
        <div className="d-inline">
          <img src={imageUrl} alt="Receta" className="mr-3 rounded float-left"/>
          <h3 className="flex-right text-right font-weight-light">Chef Alacio</h3>
          <p className="">{content}</p>
        </div>
        <hr/>
        <ListComments id={this.props.match.params.id} />
      </div>
    )
  }
}

export default Post;