import React, { Component } from "react";
import { Link } from "react-router-dom";

class PostView extends Component{

  render(){

    let { content, created, title } = this.props;

    created = new Date(created).toString().split(" ");
    created = `${created[2]} de ${created[1]}, ${created[3]}`

    return (
      <div className="card">
        <div className="card-body">
          <h4>{title}</h4>
          <p>{content}</p>
        </div>
        <div className="card-footer d-flex justify-content-between">
          <span>{created}</span>
          <Link to="">Seguir Leyendo...</Link>
        </div>
      </div>
    )
  }
}

export default PostView;