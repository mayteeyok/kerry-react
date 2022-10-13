import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./styles/Signup.css";

class Signup extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="form">
            <form>
              <div className="row">
                <div className="col-md-6">
                  <span>
                    <h3>
                      Welcome to{" "}
                      <span className="kerry-font-color">Kerry Express</span>
                    </h3>
                  </span>
                  <span>
                    <h1>
                      <strong>Sign up</strong>
                    </h1>
                  </span>
                </div>
                <div className="col-md-2"></div>
                <div className="col-md-4">
                  <span>Have an Account ?</span>
                  <br />
                  <span className="kerry-font-color">Sign in</span>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label htmlFor="Username">
                      <strong>Username</strong>
                    </label>
                    <div class="inner-addon left-addon">
                      <i class="bi bi-person"></i>
                      <input
                        type="text"
                        class="form-control mt-2"
                        id="Username"
                        placeholder="Username"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-4"></div>
              </div>
              <div className="row mt-4">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label htmlFor="Email">
                      <strong>Email</strong>
                    </label>
                    <div class="inner-addon left-addon">
                      <i class="bi bi-envelope"></i>
                      <input
                        type="text"
                        class="form-control mt-2"
                        id="Email"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-4"></div>
              </div>
              <div className="row mt-4">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label htmlFor="Phone">
                      <strong>Phone</strong>
                    </label>
                    <div class="inner-addon left-addon">
                      <i class="bi bi-telephone"></i>
                      <input
                        type="text"
                        class="form-control mt-2"
                        id="Phone"
                        placeholder="Phone"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-4"></div>
              </div>
              <div className="row mt-4">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label htmlFor="Password">
                      <strong>Password</strong>
                    </label>
                    <div class="inner-addon left-addon">
                      <i class="bi bi-lock"></i>
                      <input
                        type="text"
                        class="form-control mt-2"
                        id="Password"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-4"></div>
              </div>
              <div className="row mt-4">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label htmlFor="ConfirmPassword">
                      <strong>Confirm Password</strong>
                    </label>
                    <div class="inner-addon left-addon">
                      <i class="bi bi-lock"></i>
                      <input
                        type="text"
                        class="form-control mt-2"
                        id="ConfirmPassword"
                        placeholder="Confirm Password"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-4"></div>
              </div>
              <div className="row mt-4">
                <div className="col-md-12 text-center">
                  <NavLink to="/welcome">
                    <button type="button" className="btn kerry-button-color">
                      Sign up
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

export default Signup;
