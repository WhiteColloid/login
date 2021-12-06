import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import decode from "jwt-decode";
import shortid from 'shortid';


class LoginForm extends Component {
  state = {
    userInfo: {
      username: "",
      password: "",
    },
  };
  handleSubmit = async e => {
    e.preventDefault();
    const { data } = await this.props.loginFn.loginAc(this.state.userInfo);
    if (data.status === 0) {
      // Save token to local
      localStorage.setItem('@#@TOKEN', data.token);
      localStorage.setItem('userInfo', data.userInfo);

      // Sync user's state and info Redux
      this.props.loginFn.syncInfoAc(decode(data.token));
      // Jump to homepage
      this.props.history.push("/personal");
      // Hint
      this.props.flashFn.addFlashAc({
        type: "alert-primary",
        text: "Login success!",
        id: shortid.generate(),
      });
      return;
    }
    this.props.flashFn.addFlashAc({
      type: "alert-danger",
      text: "Login failed",
      id: shortid.generate(),
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
    const { username, password } = this.state.userInfo;
    return (
      <form onSubmit={this.handleSubmit}>
        {/* Username */}
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            name="username"
            id="username"
            defaultValue={username}
            onChange={this.handleChange}
          />
        </div>
        {/* password */}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            defaultValue={password}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Sign in
        </button>
      </form>
    );
  }
}

export default withRouter(LoginForm);
