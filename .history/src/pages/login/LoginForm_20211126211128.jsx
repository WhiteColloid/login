import React, { Component } from 'react'

export default class LoginForm extends Component {
    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
            {/* Username */}
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" className="form-control" id="username" />
            </div>
            {/* password */}
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" id="password" />
            </div>
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </form>
        )
    }
}
