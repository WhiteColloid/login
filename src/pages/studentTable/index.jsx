import React, {Component} from 'react';

import {connect} from "react-redux";
import StudentTable from "./StudentTable"
import {bindActionCreators} from "redux";
import {actionCreators as classActionCreators} from "./store";
import {actionCreators as flashActionCreators} from "../flash/store";


class Personal extends Component {
    state = {
        isSurvey: 0
    };

    componentDidMount() {
        let search = this.props.location.search
        if ((search ?? '') === '') {
            return
        }
        let paraString = search.substring(search.indexOf("?") + 1, search.length).split("&");
        this.setState({isSurvey: paraString[0].split("=")[1]})
    }



    render() {
        return <StudentTable {...this.props} />;
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
