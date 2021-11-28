import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigator from "./pages/navigator";
import Home from "./pages/home";
import Register from "./pages/registor";
import Login from "./pages/login";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Navigator />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
        </Switch>
      </Router>
    );
  }
}
