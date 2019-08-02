import React, { Component } from "react";
import PostList from "../components/PostList";
import MostPopular from "../components/MostPopular";

class Home extends Component{
  render(){
    return (
      <div className="row mt-3">
        <div className="col-md-8">
          <PostList />
        </div>
        <div className="col-md-4 mt-sm-4 mt-md-0">
          <MostPopular />
        </div>
      </div>
    )
  }
}

export default Home;