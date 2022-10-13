import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Welcome from "./Welcome";

class AppRoute extends Component {
  render() {
    return (
      <div>
        <Router basename="">
          <Routes>
            <Route path="/" exact={true} element={<Signup />} />
            <Route path="/signup" exact={true} element={<Signup />} />
            <Route path="/welcome" exact={true} element={<Welcome />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default AppRoute;
