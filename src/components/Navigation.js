import React, { Component } from "react";
import { Link } from "react-router-dom"; 

class Navigation extends Component{
  render(){
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link to="/" className="navbar-brand">Cocina Alacio</Link>
        </div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </nav>
    )
  }
}

export default Navigation;