import React, {Component} from "react";
import {withRouter} from 'react-router-dom';
import axios from '../../utils/request';
import shortid from "shortid";
import {createClassAc} from "./store/actionCreators";
import classnames from "classnames";

class Student extends Component {
    state = {
        classname: '',
        errMsg: [],
    };

    setClassName = e => {
        this.setState({classname: e.target.value,errMsg: []})
    }
    handleSubmit = async (e) => {
        if((this.state.classname??'') === ''){
            this.setState({errMsg: ['classname']});
            return
        }

        const {data: res} = await this.props.classFn.createClassAc({classname: this.state.classname});
        if (res.status === 0) {
            this.setState({classname: ''})
            this.props.flashFn.addFlashAc({
                type: "alert-primary",
                text: "create success!",
                id: shortid.generate(),
            });
            return;
        }
        this.props.flashFn.addFlashAc({
            type: "alert-danger",
            text: "create failed",
            id: shortid.generate(),
        });
    }

    render() {
        const {errMsg} = this.state;
        return (
            <form >
                <div className="form-group row " style={{paddingTop: '30px', marginLeft: '20px'}}>
                    <label htmlFor="inputEmail3"
                           className="col-sm-3 col-form-label">{'Welcome, '+this.props.loginData.user.username+' !'}</label>
                </div>
                <div className="form-group row " style={{marginLeft: '20px'}}>
                    <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">Class Name</label>
                    <div className="col-sm-6">
                        <input
                            className={classnames("form-control form-control-lg", {
                                "is-invalid": errMsg[0] === "classname",
                            })}
                             type="text"
                            value={this.state.classname}
                            id="classname"
                            name="classname"
                            onChange={this.setClassName}
                        />
                        <small className="form-text text-muted">
                            {errMsg[0] === "classname" && 'Please fill in the class name!'}
                        </small>
                    </div>
                </div>
                <div className="form-group row d-flex flex-row-reverse">
                    <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Creat class</button>
                </div>

            </form>


        );
    }
}

export default withRouter(Student);
