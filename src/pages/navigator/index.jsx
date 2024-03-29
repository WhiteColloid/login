import React, { Component } from "react";
import { Link,Route } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from '../login/store/actionCreators';

class Navigator extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          StudyBuddy
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {this.props.loginData.isAuth
            ? <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/personal">
                    Personal
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="##" onClick={this.props.logout}>
                    Logout
                  </a>
                </li>
              </ul>
            : <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/register">
                    Sign up
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Sign in
                  </Link>
                </li>
              </ul>}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    loginData: state.login,
  };
};

export default connect(mapStateToProps, { logout })(Navigator);
