import React, {Component} from "react";
import classnames from "classnames";
import {withRouter} from 'react-router-dom';
import shortid from 'shortid';

class RegisterForm extends Component {
    state = {
        userInfo: {
            username: "",
            email: "",
            password: "",
            passwordConfirm: "",
            isProfessor: "0",
        },
        errMsg: [],
    };
    handleSubmit = async e => {
        e.preventDefault();
        this.setState({errMsg: []});
        const {data} = await this.props.registerFn.registerAc(
            this.state.userInfo
        );
        if (data.status === 1) {
            return this.setState({
                errMsg: data.msg,
            });
        }
        this.props.history.push('/');
        this.props.flashFn.addFlashAc({
            type: 'alert-primary',
            text: 'Registration successed',
            id: shortid.generate()
        });
    };
    handleChange = e => {

        this.setState({
            userInfo: {
                ...this.state.userInfo,
                [e.target.name]: e.target.value,
            },
        });
    };

    render() {
        const {username, email, password, passwordConfirm,isProfessor} = this.state.userInfo;
        const {errMsg} = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                {/* Username */}
                <div className="form-group">
                    <label htmlFor="username">Username (Please use your StudentID!)</label>
                    <input
                        type="text"
                        className={classnames("form-control", {
                            "is-invalid": errMsg[0] === "username",
                        })}
                        id="username"
                        name="username"
                        defaultValue={username}
                        onChange={this.handleChange}
                    />
                    <small className="form-text text-muted">
                        {errMsg[0] === "username" && errMsg[1]}
                    </small>
                </div>
                {/* Choice */}
                <div className="form-group">
                    <label htmlFor="email">Who are you?</label>
                    <div className="form-check">
                        <input className="form-check-input"
                               checked={isProfessor === '0'}
                               onChange={this.handleChange}
                               value="0"
                               type="radio"
                               name="isProfessor"/>
                        <label className="form-check-label"
                               onClick={e=>this.handleChange({target: {name: 'isProfessor', value: '0'}})}>
                            Professor
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input"
                               checked={isProfessor === '1'}
                               value="1"
                               onChange={this.handleChange}
                               type="radio"
                               name="isProfessor"/>
                        <label className="form-check-label"
                               onClick={e=>this.handleChange({target: {name: 'isProfessor', value: '1'}})}>
                            Student
                        </label>
                    </div>
                    <small className="form-text text-muted">
                        {errMsg[0] === "email" && errMsg[1]}
                    </small>
                </div>
                {/* Email */}
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className={classnames("form-control", {
                            "is-invalid": errMsg[0] === "email",
                        })}
                        id="email"
                        name="email"
                        defaultValue={email}
                        onChange={this.handleChange}
                    />
                    <small className="form-text text-muted">
                        {errMsg[0] === "email" && errMsg[1]}
                    </small>
                </div>
                {/* password */}
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        className={classnames("form-control", {
                            "is-invalid": errMsg[0] === "password",
                        })}
                        id="password"
                        name="password"
                        defaultValue={password}
                        onChange={this.handleChange}
                    />
                    <small className="form-text text-muted">
                        {errMsg[0] === "password" && errMsg[1]}
                    </small>
                </div>
                {/* passwordConfirm */}
                <div className="form-group">
                    <label htmlFor="passwordConfirm">passwordConfirm</label>
                    <input
                        type="password"
                        className={classnames("form-control", {
                            "is-invalid": errMsg[0] === "passwordConfirm",
                        })}
                        id="passwordConfirm"
                        name="passwordConfirm"
                        defaultValue={passwordConfirm}
                        onChange={this.handleChange}
                    />
                    <small className="form-text text-muted">
                        {errMsg[0] === "passwordConfirm" && errMsg[1]}
                    </small>
                </div>
                <button type="submit" className="btn btn-primary">
                    Sign up
                </button>
            </form>
        );
    }
}

export default withRouter(RegisterForm);
