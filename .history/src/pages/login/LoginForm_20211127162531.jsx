import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import decode from 'jwt-decode';
import shortid from 'shortid';
import axios from '../../utils/request';


class LoginForm extends Component {
  state = {
    userInfo: {
      username: '',
      password: '',
    }
  };
    handleSubmit = async e => {
        e.preventDefault();
        const { data } = await this.props.loginFn.loginAc(this.state.userInfo);
        if(data.status === 0){
          //Sycn user state to redux
          this.props.loginFn.syncInfoAc(decode(data.token));
          this.props.history.push('/');
          this.props.flashFn.addFlashAc({
            type: 'alert-primary',
            text: 'Logged in!',
            id: shortid.generate()
          });
        }
       // console.log(data);
      };
      handleChange = e => {
        this.setState({
          userInfo: {
            ...this.state.userInfo,
            [e.target.name]: e.target.value
          }
        });
      };
    render() {
      const { username, password } = this.state.userInfo;
        return (
            <form onSubmit = {this.handleSubmit}>
            {/* Username */}
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" className="form-control" name="username" id="username" defaultValue={username} onChange={this.handleChange} />
            </div>
            {/* password */}
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" name="password" id="password" defaultValue={password} onChange={this.handleChange} />
            </div>
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </form>
        )
    }
}

export default withRouter(LoginForm);