import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import FlashItem from "./FlashItem";
import { actionCreators as flashActionCreators } from "./store";

class Flash extends Component {
  render() {
    return (
      <div>
        <FlashItem />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    flashData: state.flash,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      flashFn: bindActionCreators(flashActionCreators, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Flash);
