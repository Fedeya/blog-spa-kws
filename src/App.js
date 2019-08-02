import React, { Component } from 'react';
import { Route, Router, Switch } from "react-router";

import Home from "./views/Home";

class App extends Component{
  render(){
    return (
      <Router>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    )
  }
}

export default App;
