import React, {Component} from 'react';

import {connect} from "react-redux";
import Student from "./Student";
import Professor from "./Professor"
import {bindActionCreators} from "redux";
import {actionCreators as classActionCreators} from "./store";
import {actionCreators as flashActionCreators} from "../flash/store";


class Personal extends Component {
    state = {
        isSurvey: 0
    };



    render() {
        return  this.props.loginData.user.isProfessor === '1' ?
                <Student {...this.props} /> :
                <Professor {...this.props}/>;
    }
}

const mapStateToProps = state => {
    return {
        loginData: state.login,

    };
};

const mapDispatchToProps = dispatch => {
    return {
        classFn: bindActionCreators(classActionCreators, dispatch),
        flashFn: bindActionCreators(flashActionCreators, dispatch)
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Personal);
