import React, { Component } from "react";
import { connect } from 'react-redux';
import LoginForm from "./LoginForm";

class Login extends Component {
  render() {
    return (
     <LoginForm/>
    );
  }
}


export default connect(null, null)(Login);