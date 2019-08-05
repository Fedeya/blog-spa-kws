import React, { Component } from "react";
import { Link } from "react-router-dom";
import helpers from "../helpers";

class PostView extends Component{

  render(){

    let { content, created, title, id } = this.props;

    created = helpers.transformDate(created);

    return (
      <div className="card mb-3">
        <div className="card-body">
          <h4>{title}</h4>
          <p>{content.substr(0, 200)}...</p>
        </div>
        <div className="card-footer d-flex justify-content-between">
          <span>{created}</span>
          <Link to={`/post/${id}`} >Seguir Leyendo...</Link>
        </div>
      </div>
    )
  }
}

export default PostView;