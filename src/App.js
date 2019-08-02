import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./views/Home";
import Post from "./views/Post";
import Navigation from "./components/Navigation";

class App extends Component{
  render(){
    return (
      <Router>
        <Navigation />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/post/:id" component={Post} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
