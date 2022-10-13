import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import WelcomeImage from "./image/welcome.png";

class Welcome extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="form">
            <form>
              <div className="row">
                <div className="col-md-12 text-center">
                  <img
                    src={WelcomeImage}
                    className="img-fluid img-responsive"
                    width="750"
                  />
                </div>
              </div>
              <div className="row mt-0">
                <div className="col-md-12 text-center">
                  <h5>
                    Welcome to{" "}
                    <span className="kerry-font-color">Kerry Express</span>
                  </h5>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-12 text-center">
                  <h1>Kerry1234</h1>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-12 text-center">
                  <NavLink to="/signup">
                    <button type="button" className="btn kerry-button-color">
                      Back to home
                    </button>
                  </NavLink>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
