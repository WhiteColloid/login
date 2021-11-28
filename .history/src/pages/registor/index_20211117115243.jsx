import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { actionCreators as registerActionCreators } from "./store";

class Register extends Component {

}

const mapStateToProps = (state) => {
  return {
    registerData: state.register,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    registerFn: bindActionCreators(registerActionCreators, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
