import React, { Component } from "react";
import { connect } from "react-redux";
import SurveyComponent from "./SurveyComponent";
import {bindActionCreators} from "redux";
import {actionCreators as surveyActionCreators} from "./store";

class Survey extends Component {
  render() {
    return <SurveyComponent {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return {
    surveyFn: bindActionCreators(surveyActionCreators, dispatch),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Survey);
