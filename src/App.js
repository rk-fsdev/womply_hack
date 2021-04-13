import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Todos from "./pages/Todos";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" component={Todos} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
