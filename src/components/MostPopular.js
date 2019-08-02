import React, { Component } from "react";
import axios from "axios";
import ReactLoading from "react-loading";
import { Link } from "react-router-dom";

class MostPopular extends Component{

  state = {
    posts: [],
    isReady: false
  }

  getPost = async () => {
    const posts = await axios.get("http://localhost:4000/posts/popular");
    this.setState({posts: posts.data, isReady: true});
  }

  componentDidMount(){
    this.getPost();
  }

  render(){

    return (
      <div className="card card-body p-2 text-center">
        <h3>Lo más popular</h3>
        {
          this.state.isReady ? (
            <ul className="list-group">
              {
                this.state.posts.map(({title, _id}, index) => (
                  <Link className="list-group-item p-2" to={`/post/${_id}`} key={index}>{title}</Link>
                ))
              }
            </ul>
          ) : <ReactLoading type="bars" color="#000" className="mx-auto" />
        }
      </div>
    )
  }
}

export default MostPopular;