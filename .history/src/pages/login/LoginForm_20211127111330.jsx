import React, { Component } from 'react';
import axios from '../../utils/request';

export default class LoginForm extends Component {
  state = {
    userInfo: {
      username: '',
      password: ''
    }
  };
    handleSubmit = async e => {
        e.preventDefault();
        const {data} = await axios.post('/api/login');
        console.log(data);
      };
    render() {
      const { username, password } = this.state.userInfo;
        return (
            <form onSubmit = {this.handleSubmit}>
            {/* Username */}
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" className="form-control" id="username" defaultValue={username} onChange={this.handleChange} />
            </div>
            {/* password */}
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" id="password" defaultValue={password} onChange={this.handleChange} />
            </div>
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </form>
        )
    }
}
