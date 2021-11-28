import React, { Component } from "react";

export default class FlashItem extends Component {
    handleClick = () => {};
  render() {
    return (
      <div className="alert alert-primary" >
       Logged in, welcome!
        <button
          type="button"
          className="close"
          aria-label="Close"
          onClick={ this.handleClick }
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
  }
}
